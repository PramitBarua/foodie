export const parsingSingleRecipe = (obj) => {
  const {
    id,
    title,
    summary,
    image,
    sourceUrl,
    servings,
    readyInMinutes,
  } = obj;

  const newObj = {
    id,
    title,
    summary,
    image,
    sourceUrl,
    servings,
    readyInMinutes,
  };

  newObj['ingredients'] = obj.extendedIngredients.map((ingr) => {
    return ingr.originalString;
  });

  newObj['instructions'] = obj.analyzedInstructions.map((instruction) => {
    return {
      instructionHeading: instruction.name,
      steps: instruction.steps.map((step) => step.step),
    };
  });

  return newObj;
};
