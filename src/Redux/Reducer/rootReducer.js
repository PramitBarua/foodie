import { combineReducers } from 'redux';
import allRecipeReducer from './allRecipeReducer';
import searchTextReducer from './searchTextReducer';
import singleRecipeReducer from './singleRecipeReducer';

const rootReducer = combineReducers({
  searchText: searchTextReducer,
  recipes: allRecipeReducer,
  recipe: singleRecipeReducer,
});

export default rootReducer;
