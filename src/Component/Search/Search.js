import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Search.module.scss';
import { changeSearchText, getAllRecipe } from '../../Redux/Action';

import { allRecipeUrl } from '../../helpers';

export class UnconnectedSearch extends Component {
  handleSearchBtnClick(e, searchText, getAllRecipe) {
    if (searchText !== '') {
      e.preventDefault();
      const url = allRecipeUrl(searchText);
      getAllRecipe(url);
    }
  }

  render() {
    const { searchText, changeSearchText, getAllRecipe } = this.props;

    return (
      <form
        data-testid="form-element"
        className={styles.container}
        onSubmit={(e) => this.handleSearchBtnClick(e, searchText, getAllRecipe)}
      >
        <input
          type="text"
          data-testid="input-element"
          className={styles.searchInput}
          placeholder="Search over 1,000,000 recipes..."
          value={searchText}
          required
          onChange={(e) => changeSearchText(e.target.value)}
        />
        <button
          data-testid="button-element"
          type="submit"
          className={styles.searchBtn}
        >
          Search
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ searchText }) => {
  return {
    searchText,
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

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedSearch);
