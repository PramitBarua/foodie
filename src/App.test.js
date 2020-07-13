import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

import { findByTestAttr, storeFactory } from './test/testUtils';

const initialStateData = {
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
  recipe: {
    data: {
      id: 869354,
      title: 'test title',
      summary: 'test summary',
      image: 'https://spoonacular.com/recipeImages/351202-556x370.jpeg',
      ingredients: [
        '2 large egg whites',
        '8 large eggs',
        '1/2 cup granulated sugar',
      ],
      instructions: [
        {
          instructionHeading: '',
          steps: [
            'Place all ingredients in a food processor or high-powered blender.',
            'Mix until it forms a dough.',
            'Roll into balls.Store in the fridge or freezer.',
          ],
        },
      ],
      sourceUrl: 'https://runningonrealfood.com/no-bake-coconut-protein-bites/',
      servings: 4,
      readyInMinutes: 45,
    },
    loading: false,
    error: '',
  },
};

const initialStateError = {
  recipes: {
    data: [],
    loading: false,
    error: {
      code: 402,
      message: 'server error',
    },
  },
  recipe: {
    data: [],
    loading: false,
    error: {
      code: 402,
      message: 'server error',
    },
  },
};

const initialStateLoading = {
  recipes: {
    data: [],
    loading: true,
    error: '',
  },
  recipe: {
    data: [],
    loading: true,
    error: '',
  },
};

const setup = (initialState) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();

  return wrapper;
};

/**
 * @function defaultComponentTest - default component (background and header) render test in each suit
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
    describe('when data is loading', () => {
      const wrapper = setup(initialStateLoading);

      defaultComponentTest(wrapper);

      it('should not render list component', () => {
        const component = findByTestAttr(wrapper, 'list-component');
        expect(component.length).toBe(0);
      });

      it('should not render error component', () => {
        const component = findByTestAttr(wrapper, 'list-error-component');
        expect(component.length).toBe(0);
      });

      it('should not render loading component', () => {
        const component = findByTestAttr(wrapper, 'list-loading-component');
        expect(component.length).toBe(1);
      });
    });

    describe('when error occure', () => {
      const wrapper = setup(initialStateError);

      defaultComponentTest(wrapper);

      it('should not render list component', () => {
        const component = findByTestAttr(wrapper, 'list-component');
        expect(component.length).toBe(0);
      });

      it('should render error component', () => {
        const component = findByTestAttr(wrapper, 'list-error-component');
        expect(component.length).toBe(1);
      });

      it('should not render loading component', () => {
        const component = findByTestAttr(wrapper, 'list-loading-component');
        expect(component.length).toBe(0);
      });
    });

    describe('when data is present', () => {
      const wrapper = setup(initialStateData);
      defaultComponentTest(wrapper);
      it('should render list component', () => {
        const component = findByTestAttr(wrapper, 'list-component');
        expect(component.length).toBe(1);
      });

      it('should not render error component', () => {
        const component = findByTestAttr(wrapper, 'list-error-component');
        expect(component.length).toBe(0);
      });

      it('should not render loading component', () => {
        const component = findByTestAttr(wrapper, 'list-loading-component');
        expect(component.length).toBe(0);
      });
    });
  });

  describe('recipe component render', () => {
    describe('when data is loading', () => {
      const wrapper = setup(initialStateLoading);

      defaultComponentTest(wrapper);
      it('should not render recipe component', () => {
        const component = findByTestAttr(wrapper, 'recipe-component');
        expect(component.length).toBe(0);
      });

      it('should not render error component', () => {
        const component = findByTestAttr(wrapper, 'recipe-error-component');
        expect(component.length).toBe(0);
      });

      it('should not render loading component', () => {
        const component = findByTestAttr(wrapper, 'recipe-loading-component');
        expect(component.length).toBe(1);
      });
    });

    describe('when error occure', () => {
      const wrapper = setup(initialStateError);

      defaultComponentTest(wrapper);
      it('should not render recipe component', () => {
        const component = findByTestAttr(wrapper, 'recipe-component');
        expect(component.length).toBe(0);
      });

      it('should render error component', () => {
        const component = findByTestAttr(wrapper, 'recipe-error-component');
        expect(component.length).toBe(1);
      });

      it('should not render loading component', () => {
        const component = findByTestAttr(wrapper, 'recipe-loading-component');
        expect(component.length).toBe(0);
      });
    });

    describe('when data is present', () => {
      const wrapper = setup(initialStateData);
      defaultComponentTest(wrapper);
      it('should render recipe component', () => {
        const component = findByTestAttr(wrapper, 'recipe-component');
        expect(component.length).toBe(1);
      });

      it('should not render error component', () => {
        const component = findByTestAttr(wrapper, 'recipe-error-component');
        expect(component.length).toBe(0);
      });

      it('should not render loading component', () => {
        const component = findByTestAttr(wrapper, 'recipe-loading-component');
        expect(component.length).toBe(0);
      });
    });
  });
});
