import React from 'react';

const SearchInput = ({ onChange }) => (
  <div className="search">
    <input type="text" onChange={onChange} className="input-search" placeholder="Search Youtube" />
    <button type="button" className="btn btn--search"><i className="fas fa-search" /></button>
  </div>
);

export default SearchInput;
