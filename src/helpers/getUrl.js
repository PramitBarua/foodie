const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const allRecipeUrl = (searchText) => {
  const param = [
    { name: 'number', value: 20 },
    { name: 'sort', value: 'popularity' },
    { name: 'sortDirection', value: 'asc' },
    { name: 'query', value: searchText },
  ];

  let url = `${BASE_URL}/complexSearch?apiKey=${API_KEY}`;

  url = param.reduce((acc, cur) => {
    return acc + `&${cur.name}=${cur.value}`;
  }, url);

  return url;
};

export const singleRecipeUrl = (id) => {
  return `${BASE_URL}/${id}/information?apiKey=${API_KEY}&includeNutrition=false`;
};

// https://api.spoonacular.com/recipes

// https://api.spoonacular.com/recipes/869354/information?apiKey=f887907914324b8ea6677a7ed0de3d2b&includeNutrition=false
