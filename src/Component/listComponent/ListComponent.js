import React from 'react';

import styles from './ListComponent.module.scss';

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
          <div data-testid="recipe-title" className={styles.title}>
            {recipe.title.length > 20
              ? `${recipe.title.slice(0, 20)}...`
              : recipe.title}
          </div>
        </button>
      );
    });
  }
  return (
    <div className={styles.containerOuter}>
      <div data-testid="container" className={styles.containerInner}>
        {content}
      </div>
    </div>
  );
}

export default ListComponent;
