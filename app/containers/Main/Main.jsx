import React from 'react';
import { connect } from 'react-redux';
import { fetchVideos } from 'api';
import Main from 'components/Main';

class MainContainer extends React.Component {
  render() {
    const { showNavigate } = this.props;
    return (
      <Main showNavigate={showNavigate} />
    );
  }

  componentDidMount() {
    const { fetchVideos } = this.props;
    fetchVideos();
  }
}

const mapStateToProps = state => ({
  showNavigate: state.showNavigate,
});

const mapDispatchToProps = dispatch => ({
  fetchVideos: () => dispatch(fetchVideos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
