import { FETCH_VIDEOS_FAILURE } from 'constants/actionTypes.js';

const fetchVideosFailure = value => ({
  type: FETCH_VIDEOS_FAILURE,
  payload: value,
  error: true,
});

export default fetchVideosFailure;
