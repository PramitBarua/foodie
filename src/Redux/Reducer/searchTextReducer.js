import { SEARCH_TEXT } from '../Action/ActionTypes';

const searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case SEARCH_TEXT:
      return action.text;
    default:
      return state;
  }
};

export default searchTextReducer;
