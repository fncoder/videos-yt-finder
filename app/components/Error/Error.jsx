import React from 'react';

const Error = ({ errorTitle, errorText }) => (
  <div className="error">
    <p className="error__title">{errorTitle}</p>
    <p className="error__text">{errorText}</p>
  </div>
);

export default Error;
