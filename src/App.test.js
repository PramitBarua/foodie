import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import { findByTestAttr, storeFactory } from './test/testUtils';

const setup = (initialState) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  // console.log(wrapper.debug());
  return wrapper;
};

/**
 * @function defaultComponentTest - run default component (background and header) render test in each suit
 * @param {shallow wrapper} - wrapper
 * @returns {null}
 */
const defaultComponentTest = (wrapper) => {
  it('should contain background component', () => {
    const component = findByTestAttr(wrapper, 'background-component');
    expect(component.length).toBe(1);
  });
  it('should contain header component', () => {
    const component = findByTestAttr(wrapper, 'header-component');
    expect(component.length).toBe(1);
  });
};

describe('app component', () => {
  describe('list component render', () => {
    describe('when allRecipe is absent', () => {
      let wrapper;
      const initialState = {
        recipes: {
          data: [],
          loading: false,
          error: {
            code: 402,
            message: 'server error',
          },
        },
      };
      wrapper = setup(initialState);

      defaultComponentTest(wrapper);
      it('should not render list component', () => {
        const component = findByTestAttr(wrapper, 'list-component');
        expect(component.length).toBe(0);
      });
    });

    describe('when allRecipe is present', () => {
      const initialState = {
        recipes: {
          data: [
            {
              id: 869354,
              title: 'No-Bake Coconut Protein Bites',
              image: 'https://spoonacular.com/recipeImages/869354-312x231.jpg',
              imageType: 'jpg',
            },
            {
              id: 543774,
              title: 'Whipped Coconut Sweet Potatoes',
              image: 'https://spoonacular.com/recipeImages/543774-312x231.jpg',
              imageType: 'jpg',
            },
          ],
          loading: false,
          error: '',
        },
      };
      const wrapper = setup(initialState);
      defaultComponentTest(wrapper);
      it('should render list component', () => {
        const component = findByTestAttr(wrapper, 'list-component');
        expect(component.length).toBe(1);
      });
    });
  });
});
