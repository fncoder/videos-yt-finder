import React from 'react';

const Loading = ({ fetchStatus }) => {
  if (fetchStatus.isFetching) {
    return <div className="loader" />;
  } else if (fetchStatus.isFetch) {
    const hideToggle = 'hide-loader';
    return <div className={`loader ${hideToggle}`} />;
  }
  return null;
};

export default Loading;
