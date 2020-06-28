import React from "react";
import styles from "./Search.module.scss";

function Search() {
  return (
    <form className={styles.container}>
      <input
        type="text"
        data-test="searchInput"
        className={styles.searchInput}
        placeholder="Search over 1,000,000 recipes..."
      />
      <button data-test="searchBtn" className={styles.searchBtn}>
        Search
      </button>
    </form>
  );
}

export default Search;
