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
