import React from 'react';
import InstructionComponent from './instructionComponent/InstructionComponent';

function recipeComponent(props) {
  const { recipeData, loading, error } = props;

  let content = null;

  if (loading) {
    content = <h3 data-testid="component-loading">Data is loading</h3>;
  } else if (error !== '') {
    content = <h3 data-testid="component-error">{error}</h3>;
  } else if (
    Object.keys(recipeData).length > 1 &&
    recipeData.constructor === Object
  ) {
    const {
      title,
      summary,
      image,
      ingradients,
      instructions,
      sourceUrl,
      servings,
      readyInMinutes,
    } = recipeData;
    content = (
      <>
        <h2 data-testid="component-title">{title}</h2>
        <p data-testid="component-summary">{summary}</p>
        <img data-testid="component-image" src={image} alt={title} />
        <div>
          <div data-testid="component-servings">
            <span>Servings</span>
            <span>{servings}</span>
          </div>
          <div data-testid="component-readyInMinutes">
            <span>Time</span>
            <span>{readyInMinutes}</span>
          </div>
        </div>
        <div>
          <ul>
            {ingradients.map((ingradient, index) => (
              <li data-testid="component-ingradient" key={index}>
                {ingradient}
              </li>
            ))}
          </ul>
        </div>
        <div>
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
        <a data-testid="component-source" href={sourceUrl}>
          Source
        </a>
      </>
    );
  }

  return <div data-testid="recipe-component">{content}</div>;
}

export default recipeComponent;
