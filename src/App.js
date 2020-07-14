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
  Footer,
} from './Component/index';
import { getSingleRecipeAction } from './Redux/Action';
import { singleRecipeUrl } from './helpers/getUrl';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      smallScreen: true,
      showRecipeOnly: false,
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleSingleRecipeClick = this.handleSingleRecipeClick.bind(this);
    this.showListComponent = this.showListComponent.bind(this);
  }

  componentDidMount() {
    // console.log('app component componentDidMount');
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    // console.log('app component componentWillUnmount');
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  componentDidUpdate(prevProps) {
    console.log('app component componentDidUpdate');
    if (prevProps.allRecipes !== this.props.allRecipes) {
      // console.log('app component componentDidUpdate triger setState');
      this.setState({ showRecipeOnly: false });
    }
  }
  /**
   *
   */
  updateWindowDimensions() {
    // console.log('app component updateWindowDimensions');
    if (window.innerWidth <= 600 && !this.state.smallScreen) {
      this.setState({ smallScreen: true });
    } else if (window.innerWidth > 600 && this.state.smallScreen) {
      this.setState({ smallScreen: false });
    }
  }

  /**
   *
   */
  handleSingleRecipeClick(id) {
    // console.log('app component handleSingleRecipeClick');
    this.props.getSingleRecipe(singleRecipeUrl(id));
    if (window.innerWidth <= 600) {
      this.setState({ showRecipeOnly: true });
    }
  }

  /**
   *
   */
  showListComponent() {
    if (window.innerWidth <= 600) {
      this.setState({ showRecipeOnly: false });
    }
  }

  render() {
    // console.log('app component state', this.state);
    // console.log('app component props', this.props);
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
          onClick={this.handleSingleRecipeClick}
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
          showListComponent={this.showListComponent}
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
          <Footer />
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ recipes, recipe }) => {
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
