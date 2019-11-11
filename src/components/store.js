import { createStore } from 'redux';

const initialState = {
  coffees: 0,
  snacks: 0,
  naps: 0,
  studies: 0
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'coffees':
      return { ...state, coffees: state.coffees + 1 };
    case 'snacks':
      return { ...state, snacks: state.snacks + 1 };
    case 'naps':
      return { ...state, naps: state.naps + 1 };
    case 'studies':
      return { ...state, studies: state.studies + 1 };
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
