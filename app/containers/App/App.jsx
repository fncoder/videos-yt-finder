import React from 'react';
import { connect } from 'react-redux';
import { fetchNextVideos } from 'api';
import App from 'App.jsx';

class AppContainer extends React.Component {
  constructor() {
    super();

    this.startY = 635;
    this.maxResults = 20;

    this.onScroll = this.onScroll.bind(this);
  }

  onScroll(e) {
    const { searchValue, showNavigate, fetchNextVideos } = this.props;
    if (this.startY <= window.pageYOffset) {
      if (this.maxResults === 50) {
        return;
      }
      fetchNextVideos(searchValue, this.maxResults);
      this.startY += 1400;
      this.maxResults += 10;
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
});

const mapDispatchToProps = dispatch => ({
  fetchNextVideos: (searchValue, maxResults) => dispatch(fetchNextVideos(searchValue, maxResults)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
