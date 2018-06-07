import React from 'react';
import { connect } from 'react-redux';
import { addSearchValue } from 'actions';
import SearchInput from 'components/SearchInput';

class SearchInputContainer extends React.Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <SearchInput onChange={this.onChange} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onChange: value => dispatch(addSearchValue(value)),
});

export default connect(null, mapDispatchToProps)(SearchInputContainer);
