import React from 'react';
import Videos from 'containers/Videos';
import Navigate from 'containers/Navigate';
import Loading from 'containers/Loading';

const Main = ({ showNavigate }) => (
  <main className="main">
    <Loading />
    <div className="wrapper wrapper--main">
      <Videos />
      {showNavigate ? <Navigate /> : false}
    </div>
  </main>
);

export default Main;
