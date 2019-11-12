import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import actions from './MoodsActions';
import { getFace } from './MoodsSelectors';
import Start from '../components/Start/Start';
import Timer from '../components/Start/Timer';

const Moods = ({ state, faceAction, handleStart, reset }) => {
  // const [start, setStart] = useState(false);
  const face = getFace(state);
  const controlActions = actions.map(action => ({
    ...action,
    count: state[action.stateName]
  }));
  // const handleClick = () => {
  //   setStart(true);
  // };

  if(!state.start) {
    return <Start handleStart={handleStart} />;
  } else {
    return (
      <>
        <Controls actions={controlActions} handleSelection={faceAction} />
        <Face emoji={face} />
        <Timer reset={reset} />
      </>
    );
  }
};

const mapStateToProps = state => (
  {
    state: {
      coffees: state.coffees,
      snacks: state.snacks,
      naps: state.naps,
      studies: state.studies,
      start: state.start
    }
  });

const mapDispatchToProps = dispatch => ({
  faceAction(name) {
    dispatch({
      type: name
    });
  },
  handleStart() {
    dispatch({
      type: 'START'
    });
  }
});

Moods.propTypes = {
  state: PropTypes.object,
  faceAction: PropTypes.func,
  handleStart: PropTypes.func
};

const MoodsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);

export default MoodsContainer;
