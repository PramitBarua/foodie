import { combineReducers } from 'redux';
import allRecipeReducer from './allRecipeReducer';
import searchTextReducer from './searchTextReducer';
import singleRecipeReducer from './singleRecipeReducer';
import initReducer from './initReducer';

const rootReducer = combineReducers({
  init: initReducer,
  searchText: searchTextReducer,
  recipes: allRecipeReducer,
  recipe: singleRecipeReducer,
});

export default rootReducer;
