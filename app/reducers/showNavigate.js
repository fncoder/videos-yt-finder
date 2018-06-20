import { SHOW_NAVIGATE } from 'constants/actionTypes.js';

const showNavigate = (state, action) => {
  if (state === undefined) {
    return true;
  }

  switch (action.type) {
    case SHOW_NAVIGATE:
      return action.payload;
    default:
      return state;
  }
};

export default showNavigate;
