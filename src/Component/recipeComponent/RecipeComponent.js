import React from 'react';
import InstructionComponent from './instructionComponent/InstructionComponent';
import styles from './RecipeComponent.module.scss';

const timeDiv = (title, timeInMin) => {
  let displayTime = null;
  if (!isNaN(timeInMin)) {
    if (timeInMin > 60) {
      const hour = Math.floor(timeInMin / 60);
      const min = timeInMin - hour * 60;
      if (min > 0) {
        displayTime = <span>{`${hour} hours ${min} mins`}</span>;
      } else {
        displayTime = <span>{`${hour} hours`}</span>;
      }
    } else {
      displayTime = <span>{`${timeInMin} mins`}</span>;
    }
    return (
      <li>
        <h2>{title}</h2>
        {displayTime}
      </li>
    );
  }
  return null;
};

function RecipeComponent({ recipeData }) {
  let content = null;

  const {
    title,
    summary,
    image,
    ingredients,
    instructions,
    sourceUrl,
    sourceName,
    servings,
    readyInMinutes,
    cookingMinutes,
    preparationMinutes,
  } = recipeData;

  content = (
    <>
      <h1 data-testid="component-title" className={styles.title}>
        {title}
      </h1>
      <div data-testid="component-summary" className={styles.summary}>
        {summary}
      </div>
      <img
        data-testid="component-image"
        className={styles.section}
        src={image}
        alt={title}
      />

      <div className={styles.section}>
        <div data-testid="component-servings">
          <h2>Servings</h2>
          <span>{isNaN(servings) ? '-' : `${servings} persons`}</span>
        </div>
        <ul data-testid="component-time" className={styles.timePart}>
          {timeDiv('Prep', preparationMinutes)}
          {timeDiv('Cook', cookingMinutes)}
          {timeDiv('Total', readyInMinutes)}
        </ul>
      </div>

      <div className={styles.section}>
        <div>
          <h2>Ingredients</h2>
          <ul>
            {ingredients.map((ingradient, index) => (
              <li data-testid="component-ingradient" key={index}>
                {ingradient}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Instructions</h2>
          {instructions.map((instruction, instIndex) => {
            return (
              <InstructionComponent
                key={instIndex}
                data-testid="component-instruction"
                {...instruction}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.source}>
        <span>Source:</span>
        <a data-testid="component-source" href={sourceUrl}>
          {sourceName}
        </a>
      </div>
    </>
  );

  return (
    <div data-testid="recipe-component" className={styles.container}>
      {content}
    </div>
  );
}

export default RecipeComponent;
