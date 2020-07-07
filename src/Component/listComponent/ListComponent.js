import React from 'react';

function ListComponent({ recipes, onClick }) {
  let content;
  if (recipes.length > 0) {
    content = recipes.map((recipe) => {
      return (
        <button key={recipe.id} data-testid="recipe-btn" onClick={onClick}>
          <img
            data-testid="recipe-image"
            src={recipe.image}
            alt={recipe.title}
          />
          <div data-testid="recipe-title">{recipe.title}</div>
        </button>
      );
    });
  }
  return <div data-testid="container">{content}</div>;
}

export default ListComponent;
