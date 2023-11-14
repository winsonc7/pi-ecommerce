import React from 'react';
import './BobaHouse.css';
import backdrop from '../Components/Assets/shop_sign.png'
import all_product from '../Components/Assets/all_product';

const BobaHouse = () => {
  return (
  <div>
    <div className="banner">
      <img src={backdrop} alt="" className="hero-image"/>
      <div className="hero-text">
        <h1>Boba House</h1>
      </div>
    </div>

    <div className="product-list">
    {all_product.map((product) => (
      <div key={product.id} className="product-item">
        <img src={product.image} alt={product.name} />
        <div>
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
        </div>
      </div>
    ))}
    </div>
  </div>
  );
};

export default BobaHouse;