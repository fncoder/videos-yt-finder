import { FETCH_VIDEOS_SUCCESS } from 'constants/actionTypes.js';

const fetchVideosSuccess = (state, action) => {
  if (state === undefined) {
    return {};
  }

  switch (action.type) {
    case FETCH_VIDEOS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default fetchVideosSuccess;
