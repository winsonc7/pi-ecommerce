import React, { useState } from 'react';
import './BobaHouse.css';
import backdrop from '../Components/Assets/shop_sign.png'
import all_product from '../Components/Assets/all_product';

const BobaHouse = () => {
  // State to keep track of the count of added items
  const [itemCounts, setItemCounts] = useState(all_product.map(() => 0));

  // Function to handle adding an item
  const handleAddItem = (index) => {
    const newCounts = [...itemCounts];
    newCounts[index] += 1;
    setItemCounts(newCounts);
    // Add additional logic here if needed
  };

  // Function to handle removing an item
  const handleRemoveItem = (index) => {
    if (itemCounts[index] > 0) {
      const newCounts = [...itemCounts];
      newCounts[index] -= 1;
      setItemCounts(newCounts);
      // Add additional logic here if needed
    }
  };

  return (
  <div>
    <div className="banner">
      <img src={backdrop} alt="" className="hero-image"/>
      <div className="hero-text">
        <h1>Boba House</h1>
      </div>
    </div>

    <div className="product-list">
    {all_product.map((product, index) => (
      <div key={product.id} className="product-item">
        <img src={product.image} alt={product.name} />
        <div>
          <h3>{product.name}</h3>
          <p>{product.price.toFixed(2)} pi</p>
          <div className="action-buttons">
            <button className="add-button" onClick={() => handleAddItem(index)}>Add to Cart</button>
            <div className="item-count-box">
              <p>{itemCounts[index]}</p>
            </div>
            <button className="remove-button" onClick={() => handleRemoveItem(index)}>Remove</button>
          </div>
        </div>
      </div>
    ))}
    </div>
  </div>
  );
};

export default BobaHouse;