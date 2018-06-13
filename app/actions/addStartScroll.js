import { ADD_START_SCROLL } from 'constants/actionTypes.js';

const addStartScroll = value => ({
  type: ADD_START_SCROLL,
  payload: value,
});

export default addStartScroll;
