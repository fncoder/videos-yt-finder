import {
  FETCH_VIDEOS_REQUEST,
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAILURE,
} from 'constants/actionTypes.js';

const initialState = {
  isFetching: false,
};

const fetchVideo = (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case FETCH_VIDEOS_REQUEST:
      return { isFetching: true };
    case FETCH_VIDEOS_SUCCESS:
      return Object.assign({ isFetch: true }, action.payload);
    case FETCH_VIDEOS_FAILURE:
      return Object.assign({ isFetch: true, error: action.payload }, null);
    default:
      return state;
  }
};

export default fetchVideo;
