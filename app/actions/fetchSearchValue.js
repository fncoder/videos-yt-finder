import { FETCH_SEARCH_VALUE } from 'constants/actionTypes.js';

const fetchSearchValue = value => ({
  type: FETCH_SEARCH_VALUE,
  payload: value,
});

export default fetchSearchValue;
