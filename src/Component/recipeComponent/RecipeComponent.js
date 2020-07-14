import React, { useState } from 'react';
import InstructionComponent from './instructionComponent/InstructionComponent';
import styles from './RecipeComponent.module.scss';

/**
 * @function - it converts minutes to hour format and return JSX with title and modified time
 * @param {string} title
 * @param {number} timeInMin
 * @returns {JSX}
 */
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

function RecipeComponent({ recipeData, smallScreen, showRecipeOnly }) {
  let content = null;
  let summaryContent = null;
  let summaryBtn = null;

  const [showSummary, setShowSummary] = useState(false);

  let containerClassName = styles.container;
  if (smallScreen) {
    if (!showRecipeOnly) {
      containerClassName = styles.containerHide;
    }
  }

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

  summaryContent = summary;
  if (summary.length > 150) {
    if (showSummary) {
      summaryBtn = (
        <button
          className={styles.summaryBtn}
          onClick={() => setShowSummary(false)}
        >
          Show less
        </button>
      );
    } else {
      summaryContent = `${summary.slice(0, 150)}... `;
      summaryBtn = (
        <button
          className={styles.summaryBtn}
          onClick={() => setShowSummary(true)}
        >
          Show more
        </button>
      );
    }
  }

  content = (
    <>
      <h1 data-testid="component-title" className={styles.title}>
        {title}
      </h1>
      <div data-testid="component-summary" className={styles.summary}>
        {summaryContent}
        {summaryBtn}
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
        <div className={styles.ingredients}>
          <h2>Ingredients</h2>
          <ul>
            {ingredients.map((ingradient, index) => (
              <li data-testid="component-ingradient" key={index}>
                {ingradient}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.instruction}>
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
        <a
          data-testid="component-source"
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {sourceName !== '' ? sourceName : sourceUrl}
        </a>
      </div>
    </>
  );

  return (
    <div data-testid="recipe-component" className={containerClassName}>
      {content}
    </div>
  );
}

export default RecipeComponent;
