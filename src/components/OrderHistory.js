import React from 'react';

const OrderHistory = ({ orders }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>Product</th>
          <th>Price</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => order.items.map((item, index) => (
          <tr key={`${order.orderId}-${index}`}> {/* Template literal for key */}
            <td>{order.orderId}</td>
            <td>{item.title}</td>
            <td>${item.price}</td>
            <td>{order.timestamp}</td>
          </tr>
        )))}
      </tbody>
    </table>
  );
};

export default OrderHistory;