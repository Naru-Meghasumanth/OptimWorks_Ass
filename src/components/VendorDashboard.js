import React, { useState } from 'react';
import SalesHistory from './SalesHistory';

const VendorDashboard = ({ addProduct, sales }) => { // Added sales prop
  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    price: 0,
    image: ''
  });

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    addProduct(newProduct);
    setNewProduct({  // Clear the form after adding
      title: '',
      description: '',
      price: 0,
      image: ''
    });
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" className="form-control" name="title" value={newProduct.title} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea className="form-control" name="description" value={newProduct.description} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="number" className="form-control" name="price" value={newProduct.price} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input type="text" className="form-control" name="image" value={newProduct.image} onChange={handleInputChange}  /> {/* Not required, could be optional */}
        </div>
        <button type="button" className="btn btn-primary" onClick={handleAddProduct}>Add Product</button>
      </form>

      <h2 className="mt-4">Sales History</h2> {/* Display sales history on vendor dashboard */}
      <SalesHistory sales={sales} />
    </div>
  );
};

export default VendorDashboard;