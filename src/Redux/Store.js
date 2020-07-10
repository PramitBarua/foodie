import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducer/rootReducer';

const initialState = {
  searchText: '',
  recipes: {
    // contains the recipe info for list component
    loading: false,
    data: [], // [{ id:"", title:'', image:"", imageType:"" }...]
    error: '',
  },
  // recipe: {
  //   loading: false,
  //   data: {},
  //   error: '',
  // },
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

// console.log('in store', store.getState());

export default store;
