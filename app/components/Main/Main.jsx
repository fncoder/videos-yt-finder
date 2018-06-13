import React from 'react';
import Videos from 'containers/Videos';
import Navigate from 'containers/Navigate';

const Main = () => (
  <main className="main">
    <div className="wrapper wrapper--main">
      <Videos />
      <Navigate />
    </div>
  </main>
);

export default Main;
