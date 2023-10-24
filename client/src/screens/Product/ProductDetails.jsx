import React from 'react';

const ProductDetails = ({ product, onClose }) => {
  return (
    <div className="product-details">
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Brand: {product.brand}</p>
          <p className="card-text">Ratings: {product.ratings}</p>
          <p className="card-text">Price: {product.prize}</p>
          <button className="btn btn-primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
