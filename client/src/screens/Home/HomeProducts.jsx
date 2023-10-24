import React from "react";
import ProductsData from "../../data/products";

const HomeProducts = () => {

    const imagestyle = {
        width: '100%',
        
    }
  return (
    <div className="container mt-3 p-3">
      {/* title */}
      <div className="bg-primary text-center text-white rounded-3">
        <h1>Products</h1>
      </div>
      {/* grid products */}
      <div className="bg-body-secondary container p-5">
        <div className="row">
          {ProductsData.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={product.image}
                  style={imagestyle}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Brand: {product.brand}</p>
                  <p className="card-text">Ratings: {product.ratings}</p>
                  <p className="card-text">Price: {product.prize}</p>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
