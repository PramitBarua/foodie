import {
  SEARCH_RECIPES_REQUEST,
  SEARCH_RECIPES_SUCCESS,
  SEARCH_RECIPES_FAILURE,
  SEARCH_TEXT,
} from './ActionTypes';
import { getAllRecipe, changeSearchText } from './allRecipeAction';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

// declare middlewares
const middlewares = [thunk];

const mockStore = configureStore(middlewares);
const store = mockStore({});

const mock = new MockAdapter(axios);

// firing up the test Suite
describe('Testing loadAllRecipe()', () => {
  beforeEach(() => {
    store.clearActions();
  });

  const apiEndpoint = '/someapi';

  it('should get all recipes', () => {
    mock.onGet(apiEndpoint).reply(200, {
      data: {
        number: 1,
        offset: 0,
        results: [
          {
            id: 1417223,
            image: 'https://spoonacular.com/recipeImages/1417223-312x231.jpg',
            imageType: 'jpg',
            title: 'Bacon Egg and Cheese Breakfast Pizza',
          },
        ],
      },
      totalResults: 5000,
    });

    let expectedActions = [
      { type: SEARCH_RECIPES_REQUEST },
      {
        type: SEARCH_RECIPES_SUCCESS,
        body: {
          data: {
            number: 1,
            offset: 0,
            results: [
              {
                id: 1417223,
                image:
                  'https://spoonacular.com/recipeImages/1417223-312x231.jpg',
                imageType: 'jpg',
                title: 'Bacon Egg and Cheese Breakfast Pizza',
              },
            ],
          },
          totalResults: 5000,
        },
      },
    ];

    store
      .dispatch(getAllRecipe(apiEndpoint))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  it('when api call fails', () => {
    mock.onGet('not an api').reply(400, {});

    let expectedActions = [
      { type: SEARCH_RECIPES_REQUEST },
      {
        type: SEARCH_RECIPES_FAILURE,
        error: new Error('Request failed with status code 400'),
      },
    ];
    store.dispatch(getAllRecipe('not an api')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe('testing changeSearchText()', () => {
  it('should return default', () => {
    expect(store.dispatch(changeSearchText(undefined))).toEqual({
      type: SEARCH_TEXT,
      text: '',
    });
  });

  it('should return the text', () => {
    const text = 'pizza';

    const expectedAction = {
      type: SEARCH_TEXT,
      text: text,
    };

    expect(store.dispatch(changeSearchText(text))).toEqual(expectedAction);
  });
});
