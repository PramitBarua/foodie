import {
  SEARCH_RECIPES_REQUEST,
  SEARCH_RECIPES_SUCCESS,
  SEARCH_RECIPES_FAILURE,
} from '../Action/ActionTypes';

const allRecipeReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_RECIPES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SEARCH_RECIPES_SUCCESS:
      return {
        ...state,
        loading: false,
        allRecipes: action.body,
        error: '',
      };

    case SEARCH_RECIPES_FAILURE:
      return {
        ...state,
        loading: false,
        allRecipes: {},
        error: action.error,
      };

    default:
      return state;
  }
};

export default allRecipeReducer;
