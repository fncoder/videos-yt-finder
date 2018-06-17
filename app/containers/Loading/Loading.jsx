import { connect } from 'react-redux';
import Loading from 'components/Loading';

const mapStateToProps = state => ({
  fetchStatus: state.fetchVideosData,
});

export default connect(mapStateToProps)(Loading);
