import { FETCH_PAGE_FILTER } from 'constants/actionTypes.js';

const fetchPageFilter = (state, action) => {
  if (state === undefined) {
    return '';
  }

  switch (action.type) {
    case FETCH_PAGE_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default fetchPageFilter;
