import React, { Component } from 'react';
import styles from './App.module.scss';
import {
  HeaderComponent,
  BackgroundVideoComponent,
  ListComponent,
  LoadingComponent,
  ErrorComponent,
} from './Component/index';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listComponentImageLoaded: false,
    };
  }

  render() {
    const { allRecipes, loadingAllRecipes, errorAllRecipes } = this.props;

    // console.log(errorAllRecipes);
    let listContent = null;
    // let recipeContent = null;

    if (loadingAllRecipes) {
      listContent = <LoadingComponent />;
    } else if (errorAllRecipes !== '') {
      listContent = <ErrorComponent code={errorAllRecipes.code} />;
    } else if (allRecipes && allRecipes.length > 0) {
      listContent = (
        <ListComponent
          data-testid="list-component"
          recipes={allRecipes}
          onClick={null}
        />
      );
    }

    return (
      <>
        <BackgroundVideoComponent data-testid="background-component" />
        <div className={styles.app}>
          <HeaderComponent data-testid="header-component" />
          {listContent}
        </div>
      </>
    );
  }
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
