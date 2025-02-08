import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cart.map(item => (
          <tr key={item.id}>
            <td>{item.title}</td>
            <td>${item.price}</td>
            <td>{item.quantity}</td>
            <td><button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Cart;