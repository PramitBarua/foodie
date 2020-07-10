import {
  SEARCH_SINGLE_RECIPE_REQUEST,
  SEARCH_SINGLE_RECIPE_SUCCESS,
  SEARCH_SINGLE_RECIPE_FAILURE,
} from '../Action/ActionTypes';

import { parsingSingleRecipe } from '../../helpers/parsingSingleRecipe';

const singleRecipeReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_SINGLE_RECIPE_REQUEST:
      return {
        ...state,
        loading: true,
        data: {},
        error: '',
      };
    case SEARCH_SINGLE_RECIPE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: parsingSingleRecipe(action.body),
        error: '',
      };
    case SEARCH_SINGLE_RECIPE_FAILURE:
      return {
        ...state,
        loading: false,
        data: {},
        error: action.error.message,
      };
    default:
      return state;
  }
};

export default singleRecipeReducer;
