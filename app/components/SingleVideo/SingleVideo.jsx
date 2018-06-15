import React from 'react';

const SingleVideo = ({ videoID, playerID }) => (
  <iframe className={`playerVideo playerVideo${playerID}`} src={`https://www.youtube.com/embed/${videoID}`} />
);

export default SingleVideo;
