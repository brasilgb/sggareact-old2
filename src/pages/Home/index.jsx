import React, { Fragment, useState } from 'react';

const Home = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <Fragment>
      <h1>Home</h1>
      <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        Hover over me!
      </button>
      {isShown && (
        <div>
          I'll appear when you hover over the button.
        </div>
      )}
    </Fragment>
  );
};

export default Home;
