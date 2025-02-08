import React from 'react';
import Cart from './Cart';

const Checkout = ({ cart, checkout }) => {
  return (
    <div>
      <h2>Checkout</h2>
      <Cart cart={cart} removeFromCart={() => {}} />
      <button className="btn btn-success" onClick={checkout}>
        Checkout
      </button>
    </div>
  );
};

export default Checkout;
