import React from 'react';
import styles from './App.module.scss';
import { HeaderComponent, BackgroundVideoComponent } from './Component/index';
import { connect } from 'react-redux';
// import { useEffect } from 'react';

// import store from './Redux/Store';

export function App({ amountAllRecipes }) {
  // console.log('app component', store.getState());
  return (
    <div className={styles.app}>
      <BackgroundVideoComponent />
      <HeaderComponent />
    </div>
  );
}

const mapStateToProps = ({ recipes }) => {
  return {
    amountAllRecipes: recipes.data.length,
    loadingAllRecipes: recipes.loading,
    errorAllRecipes: recipes.error,
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
