import React from 'react';

const Filtr = ({ onClick, onClickIcon }) => (
  <div className="filtr">
    <div className="wrapper wrapper--filtr">
      <div onClick={onClickIcon} className="filtr-content">
        <div className="filtr-icon">
          <span className="filtr-icon__line" />
          <span className="filtr-icon__line" />
          <span className="filtr-icon__line" />
        </div>
        <p className="filtr-name">Filtr</p>
      </div>
      <ul className="filtr-list">
        <li className="filtr-list-item">
          <ul className="filtr-sort filtr-sort-by">
            <li className="filtr-list-name">Sort by</li>
            <li onClick={onClick} className="filtr-sort__item">Date</li>
            <li onClick={onClick} className="filtr-sort__item">Rating</li>
            <li onClick={onClick} className="filtr-sort__item">Relevance</li>
            <li onClick={onClick} className="filtr-sort__item">Title</li>
          </ul>
        </li>
        <li className="filtr-list-item">
          <ul className="filtr-sort filtr-sort-by">
            <li className="filtr-list-name">Time</li>
            <li onClick={onClick} className="filtr-sort__item">Any</li>
            <li onClick={onClick} className="filtr-sort__item">Long</li>
            <li onClick={onClick} className="filtr-sort__item">Medium</li>
            <li onClick={onClick} className="filtr-sort__item">Short</li>
          </ul>
        </li>
        <li className="filtr-list-item">
          <ul className="filtr-sort filtr-sort-by">
            <li className="filtr-list-name">Quality</li>
            <li onClick={onClick} className="filtr-sort__item">All</li>
            <li onClick={onClick} className="filtr-sort__item">High</li>
            <li onClick={onClick} className="filtr-sort__item">Standard</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
);

export default Filtr;
