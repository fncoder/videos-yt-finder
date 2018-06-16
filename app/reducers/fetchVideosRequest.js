import { FETCH_VIDEOS_REQUEST } from 'constants/actionTypes.js';

const initialState = {
  isFetching: false,
};

const fetchVideosRequest = (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case FETCH_VIDEOS_REQUEST:
      return {
        isFetching: true,
      };
    default:
      return state;
  }
};

export default fetchVideosRequest;
