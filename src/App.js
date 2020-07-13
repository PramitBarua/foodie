import React, { Component } from 'react';
import styles from './App.module.scss';
import { connect } from 'react-redux';
import {
  HeaderComponent,
  BackgroundVideoComponent,
  ListComponent,
  RecipeComponent,
  LoadingComponent,
  ErrorComponent,
} from './Component/index';
import { getSingleRecipeAction } from './Redux/Action';
import { singleRecipeUrl } from './helpers/getUrl';

class App extends Component {
  handelSingleRecipeClick(id) {
    this.props.getSingleRecipe(singleRecipeUrl(id));
  }

  render() {
    const {
      allRecipes,
      loadingAllRecipes,
      errorAllRecipes,
      singleRecipe,
      loadingSingleRecipe,
      errorSingleRecipe,
    } = this.props;

    let listContent = null;
    let recipeContent = null;

    // list content
    if (loadingAllRecipes) {
      listContent = <LoadingComponent data-testid="list-loading-component" />;
    } else if (errorAllRecipes !== '') {
      listContent = (
        <ErrorComponent
          data-testid="list-error-component"
          code={errorAllRecipes.code}
        />
      );
    } else if (allRecipes && allRecipes.length > 0) {
      listContent = (
        <ListComponent
          data-testid="list-component"
          recipes={allRecipes}
          onClick={this.handelSingleRecipeClick.bind(this)}
        />
      );
    }

    // recipe content
    if (loadingSingleRecipe) {
      recipeContent = (
        <LoadingComponent data-testid="recipe-loading-component" />
      );
    } else if (errorSingleRecipe !== '') {
      recipeContent = (
        <ErrorComponent
          data-testid="recipe-error-component"
          code={errorSingleRecipe.code}
        />
      );
    } else if (
      Object.keys(singleRecipe).length > 1 &&
      singleRecipe.constructor === Object
    ) {
      recipeContent = (
        <RecipeComponent
          data-testid="recipe-component"
          recipeData={singleRecipe}
        />
      );
    }

    return (
      <>
        <BackgroundVideoComponent data-testid="background-component" />
        <div className={styles.app}>
          <HeaderComponent data-testid="header-component" />
          {listContent || recipeContent ? (
            <div className={styles.container}>
              {listContent}
              {recipeContent}
            </div>
          ) : null}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  const { recipes, recipe } = state;
  return {
    allRecipes: recipes.data,
    loadingAllRecipes: recipes.loading,
    errorAllRecipes: recipes.error,
    singleRecipe: recipe.data,
    loadingSingleRecipe: recipe.loading,
    errorSingleRecipe: recipe.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSingleRecipe: (endPoint) => {
      return dispatch(getSingleRecipeAction(endPoint));
    },
  };
};

// export default connect(mapToStateProps, mapToDispatchProps)(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);
