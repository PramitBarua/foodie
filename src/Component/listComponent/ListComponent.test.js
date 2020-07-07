import React from 'react';
import { shallow } from 'enzyme';
import ListComponent from './ListComponent';

const emptyRecipe = [];
const recipes = [
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
];
const onClick = jest.fn();

describe('list component with recipes', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ListComponent recipes={recipes} onClick={onClick} />);
  });

  it('should contains `recipes.length` number images', () => {
    const component = wrapper.find(`[data-testid='recipe-image']`);
    expect(component.length).toBe(recipes.length);
  });

  it('should contains `recipes.length` number titles', () => {
    const component = wrapper.find(`[data-testid='recipe-title']`);
    expect(component.length).toBe(recipes.length);
  });

  it('onClick it should return an id', () => {
    const component = wrapper.find(`[data-testid='recipe-btn']`);
    component.at(0).simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});

describe('list component without recipes', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ListComponent recipes={emptyRecipe} onClick={onClick} />
    );
  });

  it('it should not render any button', () => {
    const component = wrapper.find(`[data-testid='container']`);
    expect(component.children().length).toBe(0);
  });
});
