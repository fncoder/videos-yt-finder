import { ADD_START_SCROLL } from 'constants/actionTypes.js';

const addStartScroll = (state, action) => {
  if (state === undefined) {
    return 635;
  }
  switch (action.type) {
    case ADD_START_SCROLL:
      if (action.payload === 635) {
        return 635;
      }
      return state + action.payload;
    default:
      return state;
  }
};

export default addStartScroll;
