import React from 'react';

const SalesHistory = ({ sales }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {sales.map((sale, index) => (
          <tr key={index}>
            <td>{sale.product}</td>
            <td>{sale.quantity}</td>
            <td>{sale.timestamp}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SalesHistory;
