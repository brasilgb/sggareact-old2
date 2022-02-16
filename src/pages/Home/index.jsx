import React, { Fragment, useState } from 'react';
import AProgressBar from '../../components/AProgressBar';
const Home = ({ loading }) => {

  const [isShown, setIsShown] = useState(false);
  return (
    <Fragment>
      <AProgressBar loading={loading}/>
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
