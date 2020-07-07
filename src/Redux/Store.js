import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducer/rootReducer';

const initialState = {
  searchText: '',
  recipes: {
    loading: false,
    allRecipes: {
      number: 0,
      offset: 0,
      results: [],
      totalResults: 0,
    },
    error: '',
  },
};

const Store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default Store;
