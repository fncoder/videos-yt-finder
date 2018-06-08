import { FETCH_VIDEOS_SUCCESS } from 'constants/actionTypes.js';

const fetchVideosSuccess = value => ({
  type: FETCH_VIDEOS_SUCCESS,
  payload: value,
});

export default fetchVideosSuccess;
