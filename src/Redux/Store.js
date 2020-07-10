import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducer/rootReducer';

const initialState = {
  searchText: '',
  recipes: {
    // contains the recipes info for list component
    loading: false,
    data: [], // [{ id: number, title: string, image: string URL, imageType: string }...]
    error: '',
  },
  // recipe: {
  //   loading: false,
  //   data: {},
  //   error: '',
  // },
};

export const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

// console.log('in store', store.getState());

export default store;
