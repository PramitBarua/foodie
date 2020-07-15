import { CHANGE_INIT } from './ActionTypes';

/**
 * @function changeSearchText
 * @param {string} text - string typeed by the user in search field
 * @returns {object} - action object with type `CHANGE_SEARCH_TEXT` and text that user typed in search field
 */
export const changeInit = (init = true) => {
  return {
    type: CHANGE_INIT,
    init,
  };
};
