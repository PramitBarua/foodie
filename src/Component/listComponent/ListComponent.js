import React, { useState, useRef } from 'react';

import styles from './ListComponent.module.scss';

function ListComponent({ recipes, onClick, smallScreen, showRecipeOnly }) {
  let content = null;
  const [imageLoading, setImageLoading] = useState(true);
  const counter = useRef(0);

  const handelImageLoading = () => {
    counter.current += 1;
    if (counter.current >= recipes.length) {
      setImageLoading(false);
    }
  };

  if (recipes.length > 0) {
    content = recipes.map((recipe) => {
      return (
        <button
          key={recipe.id}
          data-testid="recipe-btn"
          onClick={() => onClick(recipe.id)}
        >
          <div
            className={imageLoading ? styles.imageLoading : styles.imageLoaded}
          ></div>
          <img
            className={imageLoading ? styles.imageLoaded : styles.displayImage}
            data-testid="recipe-image"
            src={recipe.image}
            alt={recipe.title}
            onLoad={handelImageLoading}
          />
          <p data-testid="recipe-title" className={styles.title}>
            {recipe.title.length > 20
              ? `${recipe.title.slice(0, 20)}...`
              : recipe.title}
          </p>
        </button>
      );
    });
  }
  return (
    <div
      className={
        smallScreen && showRecipeOnly
          ? styles.containerOuterHide
          : styles.containerOuter
      }
    >
      <div data-testid="container" className={styles.containerInner}>
        {content}
      </div>
    </div>
  );
}

export default ListComponent;
