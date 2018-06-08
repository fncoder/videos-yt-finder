import React from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from 'api';
import App from 'App.jsx';

class AppContainer extends React.Component {
  render() {
    return (
      <App />
    );
  }

  componentDidMount() {
    const { fetchVideos } = this.props;
    fetchVideos();
  }
}

const mapStateToProps = dispatch => ({
  fetchVideos: () => dispatch(fetchVideos()),
});

export default connect(null, mapStateToProps)(AppContainer);
