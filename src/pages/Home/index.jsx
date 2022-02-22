import React, { Fragment, useState } from 'react';
import { useEffect } from 'react';
import AProgressBar from '../../components/AProgressBar';
import api from '../../services/api';

const Home = ({ loading }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await api.get('products');
        setProducts(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchProdutos();
  },[])
  console.log(products);

  const [isShown, setIsShown] = useState(false);
  return (
    <Fragment>
      <AProgressBar loading={loading} />
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
