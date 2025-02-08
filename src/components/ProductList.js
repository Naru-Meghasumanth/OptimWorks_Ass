import React from 'react';

const ProductList = ({ products, addToCart }) => {
  if (!products) return <div>No products available</div>;

  const handleAddToCart = (product) => {
    console.log('Adding product to cart:', product);
    addToCart(product);
  };

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4" key={product.id}>
          <div className="card mb-4 shadow-sm">
            <img src={product.image} alt={product.title} />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">{product.price}/-</small>
                <button className="btn btn-sm btn-outline-secondary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

