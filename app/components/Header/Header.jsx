import React from 'react';
import Logo from 'components/Logo';
import SearchInput from 'components/SearchInput';

const Header = () => (
  <section className="header">
    <div className="wrapper wrapper--header">
      <Logo />
      <SearchInput />
    </div>
  </section>
);

export default Header;
