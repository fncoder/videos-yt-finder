import React from 'react';

const Navigate = ({ onClick }) => (
  <div className="navigate">
    <div className="wrapper wrapper--navigate">
      <span onClick={onClick} className="arrows arrow-right" />
      <span onClick={onClick} className="arrows arrow-left" />
    </div>
  </div>
);

export default Navigate;
