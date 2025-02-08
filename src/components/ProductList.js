import React from 'react';
import './ProductList.css'; // Import the CSS file

const ProductList = ({ products, addToCart }) => {
  if (!products) return <div>No products available</div>;

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="row product-list"> {/* Added class to the row */}
      {products.map((product) => (
        <div className="col-md-4 product-item" key={product.id}> {/* Added classes to the column and item */}
          <div className="card mb-4 shadow-sm"> {/* shadow-sm class for shadow */}
            <img src={product.image} alt={product.title} className="card-img-top product-image" /> {/* Added class for image */}
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">${product.price}</small>
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