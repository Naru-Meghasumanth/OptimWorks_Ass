import React from 'react';

const Product = ({ product, addToCart }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card shadow transparent">
        {product.image && <img src={product.image} className="card-img-top" alt={product.title} />}
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">Price: {product.price}/-</p>
          <p className="card-text">Category: {product.category}</p>
          <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
