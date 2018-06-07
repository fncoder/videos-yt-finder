import { ADD_SEARCH_VALUE } from 'constants/actionTypes.js';

const addSearchValue = value =>{
  return{
    type: ADD_SEARCH_VALUE,
    payload: value
  }
}

export default addSearchValue;
