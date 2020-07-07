import React from 'react';
import { Search } from './Search';
// import { render, screen, fireEvent } from '@testing-library/react';

import { shallow, mount } from 'enzyme';

const searchText = 'pizza';
const changeSearchText = jest.fn();
const getAllRecipe = jest.fn();

let wrapper, searchBtn, searchInput;

// describe('Search component', () => {
//   beforeEach(() => {
//     render(
//       <Search
//         searchText={searchText}
//         changeSearchText={changeSearchText}
//         getAllRecipe={getAllRecipe}
//       />
//     );
//     searchInput = screen.queryByRole('textbox');
//     searchBtn = screen.queryByRole('button');
//   });

//   it('Should have a input field', () => {
//     expect(searchInput).toBeInTheDocument();
//   });

//   it('should change input value', () => {
//     fireEvent.change(searchInput, { target: { value: 'pasta' } });
//     expect(changeSearchText).toHaveBeenCalledTimes(1);
//   });

//   it('Should have a Search button', () => {
//     expect(searchBtn).toBeInTheDocument();
//     expect(searchBtn).toHaveTextContent(/search/i);
//   });

//   it('should emit get request', () => {
//     fireEvent.submit(searchBtn);
//     expect(getAllRecipe).toHaveBeenCalledTimes(1);
//   });
// });

describe('search component', () => {
  beforeEach(() => {
    wrapper = shallow(
      <Search
        searchText={searchText}
        changeSearchText={changeSearchText}
        getAllRecipe={getAllRecipe}
      />
    );
    searchInput = wrapper.find('input');
    searchBtn = wrapper.find('button');
  });
  it('Should have a input field', () => {
    expect(searchInput).toBeTruthy();
  });

  it('should change input value', () => {
    searchInput.simulate('change', { target: { value: 'pasta' } });
    expect(changeSearchText).toHaveBeenCalledTimes(1);
  });
});
