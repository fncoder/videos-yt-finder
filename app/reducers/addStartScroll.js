import { ADD_START_SCROLL } from 'constants/actionTypes.js';

const addStartScroll = (state, action) => {
  if (state === undefined) {
    return 635;
  }
  switch (action.type) {
    case ADD_START_SCROLL:
      return action.payload;
    default:
      return state;
  }
};

export default addStartScroll;
