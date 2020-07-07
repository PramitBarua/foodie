import React from 'react';
import styles from './App.module.scss';
import { HeaderComponent, BackgroundVideoComponent } from './Component/index';
import { connect } from 'react-redux';
// import { useEffect } from 'react';

export function App({ amountAllRecipes }) {
  return (
    <div className={styles.app}>
      <BackgroundVideoComponent />
      <HeaderComponent />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    amountAllRecipes: state.recipes.allRecipes.results.length,
    loadingAllRecipes: state.recipes.loading,
    errorAllRecipes: state.recipes.error,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getAllRecipe: (endPoint) => {
//       return dispatch(getAllRecipe(endPoint));
//     },
//   };
// };

// export default connect(mapToStateProps, mapToDispatchProps)(App);
export default connect(mapStateToProps)(App);
