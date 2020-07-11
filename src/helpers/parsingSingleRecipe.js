const getAppropriateString = (obj, key) => {
  if (key in obj) {
    return obj[`${key}`];
  }
  return '';
};

const getAppropriateNumber = (obj, key) => {
  if (key in obj) {
    return obj[`${key}`];
  }
  return NaN;
};

export const parsingSingleRecipe = (obj) => {
  // get desire value from obj
  const id = getAppropriateString(obj, 'id');
  const title = getAppropriateString(obj, 'title');
  const summary = getAppropriateString(obj, 'summary');
  const image = getAppropriateString(obj, 'image');
  const sourceUrl = getAppropriateString(obj, 'sourceUrl');
  const servings = getAppropriateNumber(obj, 'servings');
  const readyInMinutes = getAppropriateNumber(obj, 'readyInMinutes');

  // create new object
  const newObj = {
    id,
    title,
    summary,
    image,
    sourceUrl,
    servings,
    readyInMinutes,
  };

  newObj['ingredients'] = [];
  if ('extendedIngredients' in obj) {
    newObj['ingredients'] = obj.extendedIngredients.map((ingr) => {
      return ingr.originalString;
    });
  }

  newObj['instructions'] = [
    {
      instructionHeading: '',
      steps: [],
    },
  ];
  if ('analyzedInstructions' in obj) {
    newObj['instructions'] = obj.analyzedInstructions.map((instruction) => {
      return {
        instructionHeading: instruction.name,
        steps: instruction.steps.map((step) => step.step),
      };
    });
  }

  return newObj;
};
