import React from 'react';

const SearchInput = ({ onChange, onClick, onKeyDown }) => (
  <div className="search">
    <input type="text" onChange={onChange} onKeyDown={onKeyDown} className="input-search" placeholder="Search Youtube" />
    <button type="button" onClick={onClick} className="btn btn--search"><i className="fas fa-search" /></button>
  </div>
);

export default SearchInput;
