import React from 'react';
import { connect } from 'react-redux';
import { addPlayerVideo } from 'actions';
import { fetchPage } from 'api';
import Navigate from 'components/Navigate';

class NavigateContainer extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    const {
      searchValue, fetchVideosSucces, filter, fetchPage, addPlayerVideo,
    } = this.props;

    if (e.target.className.indexOf('arrow-right') !== -1) {
      const nextPageToken = fetchVideosSucces.nextPageToken;
      fetchPage(searchValue, nextPageToken, filter);
      addPlayerVideo(0);
    }

    if (e.target.className.indexOf('arrow-left') !== -1) {
      const prevPageToken = fetchVideosSucces.prevPageToken;
      if (prevPageToken) {
        fetchPage(searchValue, prevPageToken, filter);
        addPlayerVideo(0);
      }
    }
  }

  render() {
    return (
      <Navigate onClick={this.onClick} />
    );
  }
}

const mapStateToProps = state => ({
  searchValue: state.fetchSearchValue,
  fetchVideosSucces: state.fetchVideosSuccess,
  filter: state.fetchPageFilter,
});

const mapDispatchToProps = dispatch => ({
  fetchPage: (searchValue, pageToken, filter) => dispatch(fetchPage(searchValue, pageToken, filter)),
  addPlayerVideo: value => dispatch(addPlayerVideo(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavigateContainer);
