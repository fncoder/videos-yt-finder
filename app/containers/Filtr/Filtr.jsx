import React from 'react';
import { connect } from 'react-redux';
import { fetchPageFilter } from 'actions';
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
    const { searchValue, fetchFiltr, fetchPageFilter } = this.props;
    const filtrList = document.querySelector('.filtr-list');

    if (el === 'Date') {
      fetchFiltr(searchValue, {
        order: 'date',
      });
      fetchPageFilter('order=date');
    } else if (el === 'Rating') {
      fetchFiltr(searchValue, {
        order: 'rating',
      });
      fetchPageFilter('order=rating');
    } else if (el === 'Relevance') {
      fetchFiltr(searchValue, {
        order: 'relevance',
      });
      fetchPageFilter('order=relevance');
    } else if (el === 'Title') {
      fetchFiltr(searchValue, {
        order: 'title',
      });
      fetchPageFilter('order=title');
    } else if (el === 'Any') {
      fetchFiltr(searchValue, {
        videoDuration: 'any',
      });
      fetchPageFilter('videoDuration=any');
    } else if (el === 'Long') {
      fetchFiltr(searchValue, {
        videoDuration: 'long',
      });
      fetchPageFilter('videoDuration=long');
    } else if (el === 'Medium') {
      fetchFiltr(searchValue, {
        videoDuration: 'medium',
      });
      fetchPageFilter('videoDuration=medium');
    } else if (el === 'Short') {
      fetchFiltr(searchValue, {
        videoDuration: 'short',
      });
      fetchPageFilter('videoDuration=short');
    } else if (el === 'All') {
      fetchFiltr(searchValue, {
        videoDefinition: 'any',
      });
      fetchPageFilter('videoDefinition=any');
    } else if (el === 'High') {
      fetchFiltr(searchValue, {
        videoDefinition: 'high',
      });
      fetchPageFilter('videoDefinition=high');
    } else if (el === 'Standard') {
      fetchFiltr(searchValue, {
        videoDefinition: 'standard',
      });
      fetchPageFilter('videoDefinition=standard');
    }

    filtrList.classList.toggle('toggle-filtr');
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
  pageFilter: state.fetchPageFilter,
});

const mapDispatchToProps = dispatch => ({
  fetchFiltr: (searchValue, filtr) => dispatch(fetchFiltr(searchValue, filtr)),
  fetchPageFilter: nameFilter => dispatch(fetchPageFilter(nameFilter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltrContainer);
