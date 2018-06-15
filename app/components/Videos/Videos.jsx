import React from 'react';
import SingleVideo from 'components/SingleVideo';

const Videos = ({ items, onClick }) => {
  let itemsList = [];

  if (items) {
    console.log(items);
    itemsList = items.map((value, index) => (
      <li onClick={onClick} id={index + 1} className={`video video${index + 1}`}>
        <div className="video-content">
          <figure onClick={onClick} className="video-media">
            <img className="video-media__icon" src={value.snippet.thumbnails.medium.url} />
          </figure>
          <div className="video-text">
            <p className="video-title">{value.snippet.title}</p>
            <p className="channel-title">{value.snippet.channelTitle}</p>
            <p className="video-description">{value.snippet.description}</p>
          </div>
        </div>
        <SingleVideo playerID={index + 1} videoID={value.id.videoId} />
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
