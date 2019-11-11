import React, { Component } from 'react';
import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';

const EmojiFace = ({ face, controlActions, handleSelection }) => {
  return (
    <>
      <Controls actions={controlActions} handleSelection={handleSelection} />
      <Face emoji={face} />
    </>
  )
};

const actions = [
  { name: 'DRINK_COFFEE', text: 'Drink Coffee', stateName: 'coffees' },
  { name: 'EAT_SNACK', text: 'Snack', stateName: 'snacks' },
  { name: 'TAKE_NAP', text: 'Nap', stateName: 'naps' },
  { name: 'STUDY', text: 'Study', stateName: 'studies' },
];

export const isTired = state => state.coffees < 1 && state.naps < 1;
export const isHyper = state => state.coffees > 3;
export const isEducated = state => state.studies > 2;
export const isHungry = state => state.snacks < 1;

export const getFace = state => {
  if (isTired(state) && isHungry(state)) return '🤬';
  if (isHyper(state) && isHungry(state)) return '🤮';
  if (isTired(state)) return '😴';
  if (isHyper(state)) return '🙀';
  if (isEducated(state)) return '🤯';
  if (isHungry(state)) return '😡';

  return '😀';
};

const mapStateToProps = state => ({
  coffees: state.coffees,
  snacks: state.snacks,
  naps: state.naps,
  studies: state.studies
})

const mapDispatchToProps = dispatch => ({
  coffees() {
    dispatch({
      type: 'DRINK_COFFEE'
    });
  },
  snacks() {
    dispatch({
      type: 'EAT_SNACK'
    });
  },
  naps() {
    dispatch({
      type: 'TAKE_NAP'
    });
  },
  studies() {
    dispatch({
      type: 'STUDY'
    });
  }
})

render() {
  const face = getFace(this.state);
  const controlActions = actions.map(action => ({
    ...action,
    count: this.state[action.stateName]
  }));
}

const MoodsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmojiFace);

export default MoodsContainer;
