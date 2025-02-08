import React, { useState } from 'react';

const VendorDashboard = ({ addProduct }) => {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: 0,
    image: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setProduct({
      title: '',
      description: '',
      price: 0,
      image: '',
    });
  };

  return (
    <div>
      <h2>Vendor Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={product.title}
          onChange={(e) => setProduct({ ...product, title: e.target.value })}
        />
        <br />
        <label>Description:</label>
        <input
          type="text"
          value={product.description}
          onChange={(e) => setProduct({ ...product, description: e.target.value })}
        />
        <br />
        <label>Price:</label>
        <input
          type="number"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
        />
        <br />
        <label>Image:</label>
        <input
          type="text"
          value={product.image}
          onChange={(e) => setProduct({ ...product, image: e.target.value })}
        />
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default VendorDashboard;
