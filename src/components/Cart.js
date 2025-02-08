import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  const handleRemoveFromCart = (title) => {
    removeFromCart(title);
  };

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
        {cart.map((item) => (
          <tr key={item.title}>
            <td>{item.title}</td>
            <td>${item.price}</td>
            <td>{item.quantity}</td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleRemoveFromCart(item.title)}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Cart;
