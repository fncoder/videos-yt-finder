import React from 'react';

const Videos = ({ items }) => {
  let itemsList = [];

  if (items) {
    console.log(items);
    itemsList = items.map((value, index) => (
      <li className="video">
        <div className="video-content">
          <figure className="video-media">
            <img className="video-media__icon" src={value.snippet.thumbnails.medium.url} />
          </figure>
          <div className="video-text">
            <p className="video-title">{value.snippet.title}</p>
            <p className="channel-title">{value.snippet.channelTitle}</p>
            <p className="video-description">{value.snippet.description}</p>
          </div>
        </div>
      </li>
    ));
  }
  return (
    <div className="video-list">
      {itemsList}
    </div>
  );
};

export default Videos;
