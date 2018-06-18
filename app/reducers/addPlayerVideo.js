import { ADD_PLAYER_VIDEO } from 'constants/actionTypes.js';

const addPlayerVideo = (state, action) => {
  if (state === undefined) {
    return 0;
  }
  switch (action.type) {
    case ADD_PLAYER_VIDEO:
      return action.payload;
    default:
      return state;
  }
};

export default addPlayerVideo;
