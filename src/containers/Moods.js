import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import actions from './MoodsActions';
import { getFace } from './MoodsSelectors';

const Moods = ({ state, faceAction }) => {
  const face = getFace(state);
  const controlActions = actions.map(action => ({
    ...action,
    count: state[action.stateName]
  }));
  return (
    <>
      <Controls actions={controlActions} handleSelection={faceAction} />
      <Face emoji={face} />
    </>
  );
};

const mapStateToProps = state => (
  {
    state: {
      coffees: state.coffees,
      snacks: state.snacks,
      naps: state.naps,
      studies: state.studies
    }
  });

const mapDispatchToProps = dispatch => ({
  faceAction(name) {
    dispatch({
      type: name
    });
  }
});

Moods.propTypes = {
  state: PropTypes.object,
  faceAction: PropTypes.func
};

const MoodsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);

export default MoodsContainer;
