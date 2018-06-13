import { ADD_MAX_RESULTS_VIDEOS } from 'constants/actionTypes.js';

const addMaxResultsVideos = value => ({
  type: ADD_MAX_RESULTS_VIDEOS,
  payload: value,
});

export default addMaxResultsVideos;
