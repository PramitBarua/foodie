import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/testUtils';
import RecipeComponent from './RecipeComponent';

describe('recipe component', () => {
  const initialState = {
    recipeData: {
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
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<RecipeComponent {...initialState} />);
    // console.log(wrapper.debug());
  });
  it('the component should render without error', () => {
    const component = findByTestAttr(wrapper, 'recipe-component');
    expect(component.children().exists()).toBe(true);
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
    const component = findByTestAttr(wrapper, 'component-time');
    expect(component.length).toBe(1);
  });

  it('should contain ingradient list', () => {
    const component = findByTestAttr(wrapper, 'component-ingradient');
    expect(component.length).toBe(initialState.recipeData.ingredients.length);
  });

  it('should contain instruction component', () => {
    const component = findByTestAttr(wrapper, 'component-instruction');
    expect(component.length).toBe(initialState.recipeData.instructions.length);
  });

  it('should contain source link', () => {
    const component = findByTestAttr(wrapper, 'component-source');
    expect(component.length).toBe(1);
  });
});
