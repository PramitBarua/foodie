import React from 'react';
import styles from './App.module.scss';
import { HeaderComponent, BackgroundVideoComponent } from './Component/index';
import { connect } from 'react-redux';
import ListComponent from './Component/listComponent/ListComponent';
// import { useEffect } from 'react';

// import store from './Redux/Store';

export function App({ allRecipes }) {
  // console.log('app component', store.getState());
  return (
    <>
      <BackgroundVideoComponent />
      <div className={styles.app}>
        <HeaderComponent />
        {allRecipes.length > 0 ? (
          <ListComponent recipes={allRecipes} onClick={null} />
        ) : null}
      </div>
    </>
  );
}

const mapStateToProps = ({ recipes }) => {
  return {
    allRecipes: recipes.data,
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
