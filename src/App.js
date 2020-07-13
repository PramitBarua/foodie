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
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: 0,
      smallScreen: true,
      showRecipeOnly: false,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.allRecipes !== this.props.allRecipes) {
      this.setState({ showRecipeOnly: false });
    }
  }

  updateWindowDimensions() {
    if (window.innerWidth < 600) {
      this.setState({ windowWidth: window.innerWidth, smallScreen: true });
    } else {
      this.setState({ windowWidth: window.innerWidth, smallScreen: false });
    }
  }

  handelSingleRecipeClick(id) {
    this.props.getSingleRecipe(singleRecipeUrl(id));
    if (this.state.windowWidth < 600) {
      this.setState({ showRecipeOnly: true });
    }
  }

  render() {
    console.log(this.state);
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
          smallScreen={this.state.smallScreen}
          showRecipeOnly={this.state.showRecipeOnly}
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
          smallScreen={this.state.smallScreen}
          showRecipeOnly={this.state.showRecipeOnly}
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
