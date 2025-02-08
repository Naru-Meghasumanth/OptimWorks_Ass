import React from 'react';
import Cart from './Cart';

const Checkout = ({ cart, checkout, removeFromCart }) => {
  return (
    <div>
      <h2>Checkout</h2>
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <button className="btn btn-success" onClick={checkout}>Checkout</button>
    </div>
  );
};

export default Checkout;