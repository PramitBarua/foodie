import React from 'react';
import { shallow } from 'enzyme';
import Search, { UnconnectedSearch } from './Search';
import { findByTestAttr, storeFactory } from '../../test/testUtils';

const setup = (initialState) => {
  const store = storeFactory(initialState);

  const wrapper = shallow(<Search store={store} />)
    .dive()
    .dive();
  // console.log(wrapper.debug());
  return wrapper;
};

describe('render Search component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  it('should have a input field', () => {
    const element = findByTestAttr(wrapper, 'input-element');
    expect(element.length).toBe(1);
  });
  it('should have a submit button', () => {
    const element = findByTestAttr(wrapper, 'button-element');
    expect(element.length).toBe(1);
  });
});

describe('redux props', () => {
  it('has `searchText` as props', () => {
    const input = 'pizza';
    const wrapper = setup({ searchText: input });
    expect(wrapper.instance().props.searchText).toBe(input);
  });

  it('`changeSearchText` action creater is a function prop', () => {
    const wrapper = setup();
    expect(wrapper.instance().props.changeSearchText).toBeInstanceOf(Function);
  });

  it('`getAllRecipe` action creater is a function prop', () => {
    const wrapper = setup();
    expect(wrapper.instance().props.getAllRecipe).toBeInstanceOf(Function);
  });
});

describe('search component functionality', () => {
  it('dispatch `getAllRecipe` when submit button is clicked', () => {
    const mockGetAllRecipe = jest.fn();
    const wrapper = shallow(
      <UnconnectedSearch getAllRecipe={mockGetAllRecipe} />
    );
    const element = findByTestAttr(wrapper, 'form-element');
    element.simulate('submit', { preventDefault() {} });
    expect(mockGetAllRecipe.mock.calls.length).toBe(1);
  });
});
