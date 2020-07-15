import { CHANGE_INIT } from '../Action/ActionTypes';

const initReducer = (state = true, action) => {
  switch (action.type) {
    case CHANGE_INIT:
      return action.init;
    default:
      return state;
  }
};

export default initReducer;
