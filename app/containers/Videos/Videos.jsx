import { connect } from 'react-redux';
import Videos from 'components/Videos';

const mapStateToProps = state => ({
  items: state.fetchVideosSuccess.items,
});

export default connect(mapStateToProps)(Videos);
