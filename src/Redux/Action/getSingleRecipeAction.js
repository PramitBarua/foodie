import axios from 'axios';
import {
  SEARCH_SINGLE_RECIPE_REQUEST,
  SEARCH_SINGLE_RECIPE_FAILURE,
  SEARCH_SINGLE_RECIPE_SUCCESS,
} from './ActionTypes';

const fetchRequest = () => {
  return {
    type: SEARCH_SINGLE_RECIPE_REQUEST,
  };
};

const fetchSuccess = (body) => {
  return {
    type: SEARCH_SINGLE_RECIPE_SUCCESS,
    body,
  };
};

const fetchFailure = (error) => {
  return {
    type: SEARCH_SINGLE_RECIPE_FAILURE,
    error,
  };
};

export const getSingleRecipeAction = (endPoint) => (dispatch) => {
  dispatch(fetchRequest());
  return axios
    .get(endPoint)
    .then((response) => {
      dispatch(fetchSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchFailure(error));
    });
};
