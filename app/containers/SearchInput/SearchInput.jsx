import React from 'react';
import { connect } from 'react-redux';
import { addSearchValue, fetchSearchValue } from 'actions';
import { fetchVideos } from 'api';
import SearchInput from 'components/SearchInput';

class SearchInputContainer extends React.Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onChange(e) {
    this.props.onChange(e.target.value);
  }

  onClick() {
    const { searchValue, fetchVideos, fetchSearchValue } = this.props;
    fetchSearchValue(searchValue);
    fetchVideos(searchValue);
  }

  onKeyDown(e) {
    const { searchValue, fetchVideos, fetchSearchValue } = this.props;
    if (e.keyCode === 13 && searchValue.length !== '') {
      fetchSearchValue(searchValue);
      fetchVideos(searchValue);
    }
  }

  render() {
    return (
      <SearchInput
        onChange={this.onChange}
        onClick={this.onClick}
        onKeyDown={this.onKeyDown}
      />
    );
  }
}

const mapStateToProps = state => ({
  searchValue: state.addSearchValue,
});

const mapDispatchToProps = dispatch => ({
  onChange: value => dispatch(addSearchValue(value)),
  fetchVideos: value => dispatch(fetchVideos(value)),
  fetchSearchValue: value => dispatch(fetchSearchValue(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInputContainer);
