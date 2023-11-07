import React from 'react';
import banner from '../Components/Assets/shop_sign.png';
import './BobaHouse.css';

const BobaHouse = () => {
  return (
    <div className="bobahouse-container">
      <div className="banner">
        <img src={banner} alt="Boba House" />
      </div>
      <div className="restaurant-name">
        <h1>Boba House</h1>
      </div>
    </div>
  );
};

export default BobaHouse;