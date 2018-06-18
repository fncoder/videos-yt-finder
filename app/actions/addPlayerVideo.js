import { ADD_PLAYER_VIDEO } from 'constants/actionTypes.js';

const addPlayerVideo = value => ({
  type: ADD_PLAYER_VIDEO,
  payload: value,
});

export default addPlayerVideo;
