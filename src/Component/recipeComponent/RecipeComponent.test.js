import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/testUtils';
import RecipeComponent from './RecipeComponent';

describe('recipe component', () => {
  describe('when app starts', () => {
    let wrapper;
    const initialState = {
      recipeData: {},
      loading: false,
      error: '',
    };

    beforeEach(() => {
      wrapper = shallow(<RecipeComponent {...initialState} />);
    });

    it('the component should render `nothing`', () => {
      const component = findByTestAttr(wrapper, 'recipe-component');
      expect(component.children().exists()).toBe(false);
    });
  });

  /**
   * when data is present and component should display the desire elements
   */
  describe('render when recipeData is present', () => {
    const initialState = {
      recipeData: {
        id: 869354,
        title: 'test title',
        summary: 'test summary',
        image: 'https://spoonacular.com/recipeImages/351202-556x370.jpeg',
        ingradients: [
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
        sourceUrl:
          'https://runningonrealfood.com/no-bake-coconut-protein-bites/',
        servings: 4,
        readyInMinutes: 45,
      },
      loading: false,
      error: '',
    };

    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<RecipeComponent {...initialState} />);
    });
    it('the component should render without error', () => {
      const component = findByTestAttr(wrapper, 'recipe-component');
      expect(component.children().exists()).toBe(true);
    });

    it('should not render loading screen', () => {
      const component = findByTestAttr(wrapper, 'component-loading');
      expect(component.length).toBe(0);
    });
    it('should not render error message', () => {
      const component = findByTestAttr(wrapper, 'component-error');
      expect(component.length).toBe(0);
    });
    it('should contain title', () => {
      const title = findByTestAttr(wrapper, 'component-title');
      expect(title.length).toBe(1);
    });

    it('should contian a summary', () => {
      const component = findByTestAttr(wrapper, 'component-summary');
      expect(component.length).toBe(1);
    });

    it('should contain an image', () => {
      const component = findByTestAttr(wrapper, 'component-image');
      expect(component.length).toBe(1);
    });

    it('should contain serving', () => {
      const component = findByTestAttr(wrapper, 'component-servings');
      expect(component.length).toBe(1);
    });

    it('should contain cooking time', () => {
      const component = findByTestAttr(wrapper, 'component-readyInMinutes');
      expect(component.length).toBe(1);
    });

    it('should contain ingradient list', () => {
      const component = findByTestAttr(wrapper, 'component-ingradient');
      expect(component.length).toBe(initialState.recipeData.ingradients.length);
    });

    it('should contain instruction component', () => {
      const component = findByTestAttr(wrapper, 'component-instruction');
      expect(component.length).toBe(
        initialState.recipeData.instructions.length
      );
    });

    it('should contain source link', () => {
      const component = findByTestAttr(wrapper, 'component-source');
      expect(component.length).toBe(1);
    });
  });

  /**
   * when data is loading from API loading message/spin should appear
   */
  describe('when data is loading', () => {
    const initialState = {
      recipeData: {},
      loading: true,
      error: '',
    };

    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<RecipeComponent {...initialState} />);
    });

    it('the component should render without error', () => {
      const component = findByTestAttr(wrapper, 'recipe-component');
      expect(component.children().exists()).toBe(true);
    });

    it('should render loading screen', () => {
      const component = findByTestAttr(wrapper, 'component-loading');
      expect(component.length).toBe(1);
    });

    it('should not render error message', () => {
      const component = findByTestAttr(wrapper, 'component-error');
      expect(component.length).toBe(0);
    });

    it('should not contain title', () => {
      const title = findByTestAttr(wrapper, 'component-title');
      expect(title.length).toBe(0);
    });

    it('should not contian a summary', () => {
      const component = findByTestAttr(wrapper, 'component-summary');
      expect(component.length).toBe(0);
    });

    it('should not contain an image', () => {
      const component = findByTestAttr(wrapper, 'component-image');
      expect(component.length).toBe(0);
    });

    it('should not contain serving', () => {
      const component = findByTestAttr(wrapper, 'component-servings');
      expect(component.length).toBe(0);
    });

    it('should not contain cooking time', () => {
      const component = findByTestAttr(wrapper, 'component-readyInMinutes');
      expect(component.length).toBe(0);
    });

    it('should not contain ingradient list', () => {
      const component = findByTestAttr(wrapper, 'component-ingradient');
      expect(component.length).toBe(0);
    });

    it('should not contain instruction component', () => {
      const component = findByTestAttr(wrapper, 'component-instruction');
      expect(component.length).toBe(0);
    });

    it('should not contain source link', () => {
      const component = findByTestAttr(wrapper, 'component-source');
      expect(component.length).toBe(0);
    });
  });

  describe('when there is an error', () => {
    const initialState = {
      recipeData: {},
      loading: false,
      error: 'Something went wrong, please try again later.',
    };

    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<RecipeComponent {...initialState} />);
    });

    it('the component should render without error', () => {
      const component = findByTestAttr(wrapper, 'recipe-component');
      expect(component.children().exists()).toBe(true);
    });

    it('should render error message', () => {
      const component = findByTestAttr(wrapper, 'component-error');
      expect(component.length).toBe(1);
    });

    it('should not render loading screen', () => {
      const component = findByTestAttr(wrapper, 'component-loading');
      expect(component.length).toBe(0);
    });

    it('should not contain title', () => {
      const title = findByTestAttr(wrapper, 'component-title');
      expect(title.length).toBe(0);
    });

    it('should not contian a summary', () => {
      const component = findByTestAttr(wrapper, 'component-summary');
      expect(component.length).toBe(0);
    });

    it('should not contain an image', () => {
      const component = findByTestAttr(wrapper, 'component-image');
      expect(component.length).toBe(0);
    });

    it('should not contain serving', () => {
      const component = findByTestAttr(wrapper, 'component-servings');
      expect(component.length).toBe(0);
    });

    it('should not contain cooking time', () => {
      const component = findByTestAttr(wrapper, 'component-readyInMinutes');
      expect(component.length).toBe(0);
    });

    it('should not contain ingradient list', () => {
      const component = findByTestAttr(wrapper, 'component-ingradient');
      expect(component.length).toBe(0);
    });

    it('should not contain instruction component', () => {
      const component = findByTestAttr(wrapper, 'component-instruction');
      expect(component.length).toBe(0);
    });

    it('should not contain source link', () => {
      const component = findByTestAttr(wrapper, 'component-source');
      expect(component.length).toBe(0);
    });
  });
});
