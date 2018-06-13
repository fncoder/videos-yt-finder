import { ADD_MAX_RESULTS_VIDEOS } from 'constants/actionTypes.js';

const addMaxResultsVideos = (state, action) => {
  if (state === undefined) {
    return 20;
  }
  switch (action.type) {
    case ADD_MAX_RESULTS_VIDEOS:
      return action.payload;
    default:
      return state;
  }
};

export default addMaxResultsVideos;
