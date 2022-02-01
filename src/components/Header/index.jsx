import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
const Header = () => {
  return (
    <Fragment>
      <header className="bg-gray-500'">
        {/* <nav className='bg-gray-500'>
          <Link to="/">Home</Link> | {" "}
          <Link to="/periodo">Periodo</Link>
        </nav> */}
        <NavBar/>
      </header>
    </Fragment>
  );
};

export default Header;
