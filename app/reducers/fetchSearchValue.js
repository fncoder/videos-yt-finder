import { FETCH_SEARCH_VALUE } from 'constants/actionTypes.js';

const fetchSearchValue = (state, action) => {
  if (state === undefined) {
    return 'google';
  }
  switch (action.type) {
    case FETCH_SEARCH_VALUE:
      return action.payload;
    default:
      return state;
  }
};

export default fetchSearchValue;
