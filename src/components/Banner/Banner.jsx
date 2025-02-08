import React from 'react';
import imagone from '../asset/welcome.jpg'
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <img
        src={imagone}
        alt="Banner"
        className="banner-image"
        onError={(e) => (e.target.src = "https://via.placeholder.com/1500x500")}
      />
      <div className="banner-content">
        <h1 className='banner-heading'>Welcome to Our Store</h1>
        <p className='banner-para'>Discover the best products at amazing prices</p>
      </div>
    </div>
  );
};

export default Banner;
