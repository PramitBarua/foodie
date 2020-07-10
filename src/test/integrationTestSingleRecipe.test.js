import moxios from 'moxios';

import { storeFactory } from './testUtils';
import { getSingleRecipeAction } from '../Redux/Action/getSingleRecipeAction';
import { singleRecipeResponse, singleRecipe } from './demoResponse';

describe('getSingleRecipe action creator', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('add response data to state', () => {
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: singleRecipeResponse,
      });
    });

    return store
      .dispatch(getSingleRecipeAction('https://endpoint'))
      .then(() => {
        const newState = store.getState();
        expect(newState.recipe.data).toEqual(singleRecipe);
      });
  });
});
