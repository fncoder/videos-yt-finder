import React from 'react';
import Logo from 'components/Logo';
import SearchInput from 'containers/SearchInput';
import Filtr from 'containers/Filtr';

const Header = () => (
  <section className="header">
    <div className="wrapper wrapper--header">
      <div className="header-top">
        <Logo />
        <SearchInput />
      </div>
      <Filtr />
    </div>
  </section>
);

export default Header;
