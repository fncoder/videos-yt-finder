import React from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from 'api';
import Main from 'components/Main';

class MainContainer extends React.Component {
  render() {
    return (
      <Main />
    );
  }

  componentDidMount() {
    const { fetchVideos } = this.props;
    fetchVideos();
  }
}

const mapDispatchToProps = dispatch => ({
  fetchVideos: () => dispatch(fetchVideos()),
});

export default connect(null, mapDispatchToProps)(MainContainer);
