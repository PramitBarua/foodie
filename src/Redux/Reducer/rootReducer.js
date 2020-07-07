import { combineReducers } from 'redux';
import allRecipeReducer from './allRecipeReducer';
import searchTextReducer from './searchTextReducer';

const rootReducer = combineReducers({
  searchText: searchTextReducer,
  recipes: allRecipeReducer,
});

export default rootReducer;
