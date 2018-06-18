import React from 'react';
import { connect } from 'react-redux';
import { addPlayerVideo } from 'actions';
import Videos from 'components/Videos';

class VideosContainer extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const { addPlayerVideo } = this.props;

    if (e.target.className === 'video-media__icon' || e.target.className === 'video-title') {
      addPlayerVideo(parseFloat(e.currentTarget.id));
    }
  }

  render() {
    const { items, playerVideoID, addPlayerVideo } = this.props;
    return (
      <Videos
        items={items}
        onClick={this.onClick}
        playerVideoID={playerVideoID}
      />
    );
  }
}

const mapStateToProps = state => ({
  items: state.fetchVideosSuccess.items,
  playerVideoID: state.addPlayerVideo,
});

const mapDispatchToProps = dispatch => ({
  addPlayerVideo: value => dispatch(addPlayerVideo(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VideosContainer);
