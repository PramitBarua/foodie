import allRecipeReducer from './allRecipeReducer';
import {
  SEARCH_RECIPES_REQUEST,
  SEARCH_RECIPES_SUCCESS,
  SEARCH_RECIPES_FAILURE,
} from '../Action/ActionTypes';

const initialState = {
  // loading: false,
  // allRecipes: {},
  // error: '',
};

describe('recipe Reducer', () => {
  it('should return default state', () => {
    const reducer = allRecipeReducer(undefined, { type: 'notAnAction' });

    expect(reducer).toEqual({});
  });

  it('should request recipe from API', () => {
    const newState = {
      loading: true,
    };

    const reducer = allRecipeReducer(initialState, {
      type: SEARCH_RECIPES_REQUEST,
      loading: true,
    });
    expect(reducer).toEqual(newState);
  });

  it('should update recipes when SEARCH_RECIPES_SUCCESS action is dispatched', () => {
    const APIres = {
      count: 3,
      recipes: [{ title: 'test 1' }, { title: 'test 2' }, { title: 'test 3' }],
    };

    const newState = {
      allRecipes: {
        count: 3,
        recipes: [
          { title: 'test 1' },
          { title: 'test 2' },
          { title: 'test 3' },
        ],
      },
      error: '',
      loading: false,
    };
    const reducer = allRecipeReducer(initialState, {
      type: SEARCH_RECIPES_SUCCESS,
      body: APIres,
    });

    expect(reducer).toEqual(newState);
  });

  it('should return error when API request fails', () => {
    const errorMsg = 'Something went wrong';

    const newState = {
      allRecipes: {},
      error: 'Something went wrong',
      loading: false,
    };

    const reducer = allRecipeReducer(initialState, {
      type: SEARCH_RECIPES_FAILURE,
      error: errorMsg,
    });
    expect(reducer).toEqual(newState);
  });
});
// it("", () => {});
