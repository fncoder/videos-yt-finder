import React from 'react';
import { connect } from 'react-redux';
import { fetchFiltr } from 'api';
import Filtr from 'components/Filtr';

class FiltrContainer extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
    this.onClickIcon = this.onClickIcon.bind(this);
  }

  onClickIcon(e) {
    const filtrList = document.querySelector('.filtr-list');
    filtrList.classList.toggle('toggle-filtr');
  }

  onClick(e) {
    const el = e.target.childNodes[0].nodeValue;
    const { searchValue, fetchFiltr } = this.props;
    if (el === 'Date') {
      fetchFiltr(searchValue, {
        order: 'date',
      });
    } else if (el === 'Rating') {
      fetchFiltr(searchValue, {
        order: 'rating',
      });
    } else if (el === 'Relevance') {
      fetchFiltr(searchValue, {
        order: 'relevance',
      });
    } else if (el === 'Title') {
      fetchFiltr(searchValue, {
        order: 'title',
      });
    } else if (el === 'Any') {
      fetchFiltr(searchValue, {
        videoDuration: 'any',
      });
    } else if (el === 'Long') {
      fetchFiltr(searchValue, {
        videoDuration: 'long',
      });
    } else if (el === 'Medium') {
      fetchFiltr(searchValue, {
        videoDuration: 'medium',
      });
    } else if (el === 'Short') {
      fetchFiltr(searchValue, {
        videoDuration: 'short',
      });
    } else if (el === 'All') {
      fetchFiltr(searchValue, {
        videoDefinition: 'any',
      });
    } else if (el === 'High') {
      fetchFiltr(searchValue, {
        videoDefinition: 'high',
      });
    } else if (el === 'Standard') {
      fetchFiltr(searchValue, {
        videoDefinition: 'standard',
      });
    }
  }

  render() {
    return (
      <Filtr
        onClick={this.onClick}
        onClickIcon={this.onClickIcon}
      />
    );
  }
}

const mapStateToProps = state => ({
  searchValue: state.fetchSearchValue,
});

const mapDispatchToProps = dispatch => ({
  fetchFiltr: (searchValue, filtr) => dispatch(fetchFiltr(searchValue, filtr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltrContainer);
