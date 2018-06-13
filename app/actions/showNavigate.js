import { SHOW_NAVIGATE } from 'constants/actionTypes.js';

const showNavigate = value => ({
  type: SHOW_NAVIGATE,
  payload: value,
});

export default showNavigate;
