import React from 'react';
import { connect } from 'react-redux';
import { addStartScroll, addMaxResultsVideos } from 'actions';
import { fetchNextVideos } from 'api';
import App from 'App.jsx';

class AppContainer extends React.Component {
  constructor() {
    super();

    this.onScroll = this.onScroll.bind(this);
  }

  onScroll(e) {
    const {
      searchValue, startY, maxResults, fetchNextVideos, scrollStartY, maxResultsVideos,
    } = this.props;

    if (startY <= window.pageYOffset) {
      if (maxResults === 50) {
        return;
      }
      fetchNextVideos(searchValue, maxResults);
      scrollStartY(1400);
      maxResultsVideos(10);
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  render() {
    return (
      <App />
    );
  }
}

const mapStateToProps = state => ({
  searchValue: state.fetchSearchValue,
  startY: state.addStartScroll,
  maxResults: state.addMaxResultsVideos,
});

const mapDispatchToProps = dispatch => ({
  fetchNextVideos: (searchValue, maxResults) => dispatch(fetchNextVideos(searchValue, maxResults)),
  scrollStartY: value => dispatch(addStartScroll(value)),
  maxResultsVideos: value => dispatch(addMaxResultsVideos(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
