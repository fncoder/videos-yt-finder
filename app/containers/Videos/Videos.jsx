import React from 'react';
import { connect } from 'react-redux';
import Videos from 'components/Videos';

class VideosContainer extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const playerVideo = document.querySelectorAll('.playerVideo');

    for (let i = 0; i < playerVideo.length; i++) {
      playerVideo[i].style.display = 'none';
    }

    if (e.target.className === 'video-media__icon' || e.target.className === 'video-title') {
      playerVideo[e.currentTarget.id - 1].style.display = 'block';
    }
  }

  render() {
    const { items } = this.props;
    return (
      <Videos
        items={items}
        onClick={this.onClick}
      />
    );
  }
}

const mapStateToProps = state => ({
  items: state.fetchVideosSuccess.items,
});

export default connect(mapStateToProps, null)(VideosContainer);
