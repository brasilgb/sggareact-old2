import React, { Fragment } from 'react';

const Header = (props) => {
  return (
      <Fragment>
          <header className="App-header">
          <h1>{props.title}</h1>
          </header>
      </Fragment>
  );
};

export default Header;
