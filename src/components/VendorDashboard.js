import React, { useState } from 'react';

const VendorDashboard = ({ addProduct }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');

  const handleAddProduct = () => {
    const newProduct = { title, description, price, image };
    addProduct(newProduct);
    setTitle('');
    setDescription('');
    setPrice(0);
    setImage('');
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input type="text" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <button className="btn btn-primary" onClick={handleAddProduct}>Add Product</button>
      </form>
    </div>
  );
};

export default VendorDashboard;
