import { ADD_SEARCH_VALUE } from 'constants/actionTypes.js';

const addSearchValue = (state, action) => {
  if (state === undefined) {
    return '';
  }

  switch (action.type) {
    case ADD_SEARCH_VALUE:
      return action.payload;
    default:
      return state;
  }
};

export default addSearchValue;
