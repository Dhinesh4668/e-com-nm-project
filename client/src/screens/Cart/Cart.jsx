import React, { useState } from 'react';
import ProductsData from '../../data/products'; 

const Cart = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Add the selected product to the cart
    setCart([...cart, product]);
  };

  return (
    <div className="bg-body-secondary">
      <div className="container">
        {/* <div className="row">
          {ProductsData.map((product) => (
            <Product key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div> */}
      </div>
      <div className="container mt-4">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
