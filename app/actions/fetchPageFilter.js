import { FETCH_PAGE_FILTER } from 'constants/actionTypes.js';

const fetchPageFilter = value => ({
  type: FETCH_PAGE_FILTER,
  payload: value,
});

export default fetchPageFilter;
