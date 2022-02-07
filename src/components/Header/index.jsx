import React, { Fragment } from 'react';
import NavBar from './NavBar';
const Header = () => {
  return (
    <Fragment>
      <header className="bg-gray-100 border-b border-white shadow-lg">
        <NavBar/>
      </header>
    </Fragment>
  );
};

export default Header;
