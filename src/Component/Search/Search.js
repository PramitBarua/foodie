import React from 'react';
import { connect } from 'react-redux';
import styles from './Search.module.scss';
import { changeSearchText, getAllRecipe } from '../../Redux/Action';

const handleSearchBtnClick = (e, searchText, getAllRecipe) => {
  if (searchText !== '') {
    e.preventDefault();

    const param = [
      { name: 'number', value: 30 },
      { name: 'sort', value: 'popularity' },
      { name: 'sortDirection', value: 'asc' },
      { name: 'query', value: searchText },
    ];

    let url = `${process.env.REACT_APP_BASE_URL}/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}`;

    url = param.reduce((acc, cur) => {
      return acc + `&${cur.name}=${cur.value}`;
    }, url);

    getAllRecipe(url);
  }
};

export function Search({ searchText, changeSearchText, getAllRecipe }) {
  return (
    <form
      className={styles.container}
      onSubmit={(e) => handleSearchBtnClick(e, searchText, getAllRecipe)}
    >
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search over 1,000,000 recipes..."
        value={searchText}
        required
        onChange={(e) => changeSearchText(e.target.value)}
      />
      <button type="submit" className={styles.searchBtn}>
        Search
      </button>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    searchText: state.searchText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSearchText: (text) => {
      return dispatch(changeSearchText(text));
    },
    getAllRecipe: (endPoint) => {
      return dispatch(getAllRecipe(endPoint));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
