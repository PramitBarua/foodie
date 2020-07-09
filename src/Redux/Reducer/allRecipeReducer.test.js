import allRecipeReducer from './allRecipeReducer';
import {
  SEARCH_RECIPES_REQUEST,
  SEARCH_RECIPES_SUCCESS,
  SEARCH_RECIPES_FAILURE,
} from '../Action/ActionTypes';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

describe('recipe Reducer', () => {
  it('should return default state', () => {
    const reducer = allRecipeReducer(undefined, { type: 'notAnAction' });

    expect(reducer).toEqual({});
  });

  it('when `SEARCH_RECIPES_REQUEST` action is dispatch', () => {
    const newState = {
      loading: true,
      data: [],
      error: '',
    };

    const reducer = allRecipeReducer(initialState, {
      type: SEARCH_RECIPES_REQUEST,
      loading: true,
    });
    expect(reducer).toEqual(newState);
  });

  it('when `SEARCH_RECIPES_SUCCESS` action is dispatch', () => {
    const APIres = {
      results: [
        {
          id: 150032,
          title: 'Tapioca Pudding with Coconut Cream and Palm-Sugar Syrup',
          image: 'https://spoonacular.com/recipeImages/150032-312x231.jpg',
          imageType: 'jpg',
        },
        {
          id: 157539,
          title: 'Coconut Panna Cotta with Passionfruit and Mangoes',
          image: 'https://spoonacular.com/recipeImages/157539-312x231.jpg',
          imageType: 'jpg',
        },
        {
          id: 53928,
          title: 'Hand-tossed Coconut-lime Sorbet In Sugar-dusted Wonton Cups',
          image: 'https://spoonacular.com/recipeImages/53928-312x231.jpg',
          imageType: 'jpg',
        },
      ],
      offset: 0,
      number: 3,
      totalResults: 5691,
    };

    const newState = {
      data: [
        {
          id: 150032,
          title: 'Tapioca Pudding with Coconut Cream and Palm-Sugar Syrup',
          image: 'https://spoonacular.com/recipeImages/150032-312x231.jpg',
          imageType: 'jpg',
        },
        {
          id: 157539,
          title: 'Coconut Panna Cotta with Passionfruit and Mangoes',
          image: 'https://spoonacular.com/recipeImages/157539-312x231.jpg',
          imageType: 'jpg',
        },
        {
          id: 53928,
          title: 'Hand-tossed Coconut-lime Sorbet In Sugar-dusted Wonton Cups',
          image: 'https://spoonacular.com/recipeImages/53928-312x231.jpg',
          imageType: 'jpg',
        },
      ],
      error: '',
      loading: false,
    };
    const reducer = allRecipeReducer(initialState, {
      type: SEARCH_RECIPES_SUCCESS,
      body: APIres,
    });

    expect(reducer).toEqual(newState);
  });

  it('when `SEARCH_RECIPES_FAILURE` action is dispatch', () => {
    const errorMsg = 'Something went wrong';

    const newState = {
      data: [],
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
