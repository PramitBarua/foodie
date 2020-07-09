import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducer/rootReducer';

const initialState = {
  searchText: '',
  recipes: {
    loading: false,
    data: [],
    error: '',
  },
  // recipe: {
  //   loading: false,
  //   data: {},
  //   error: '',
  // },
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

// console.log(store.getState());

export default store;
