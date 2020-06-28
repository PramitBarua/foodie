import React from "react";
import styles from "./Search.module.scss";

function Search() {
  return (
    <div>
      <input
        type="text"
        data-test="searchInput"
        className={styles.searchInput}
      />
      <button data-test="searchBtn">Search</button>
    </div>
  );
}

export default Search;
