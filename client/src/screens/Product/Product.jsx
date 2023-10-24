// import React from "react";
// import Items from "./Items";

// const Product = () => {
//   const imagestyle = {
//     width: '100%', 
//   };

//   return (
//     <div className="container mt-3 p-3">
//       {/* title */}
//       <div className="bg-primary text-center text-white rounded-3">
//         <h1>Products</h1>
//       </div>
//       {/* grid products */}
//       <div className="bg-body-secondary container p-5">
//         <div className="row">
//           {Items.map((data) => (
//             <div key={data.id} className="col-md-4 mb-4">
//               <div className="card">
//                 <img
//                   src={data.image}
//                   style={imagestyle}
//                   className="card-img-top"
//                   alt={data.name}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{data.name}</h5>
//                   <p className="card-text">Brand: {data.brand}</p>
//                   <p className="card-text">Ratings: {data.ratings}</p>
//                   <p className="card-text">Price: {data.prize}</p>
//                   <button className="btn btn-primary">Add to Cart</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;
import React, { useState } from 'react';
import Items from './Items';
import ProductDetails from './ProductDetails'; // Import the ProductDetails component

const Product = () => {
  const imagestyle = {
    width: '100%',
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container mt-3 p-3">
      {/* title */}
      <div className="bg-primary text-center text-white rounded-3">
        <h1>Products</h1>
      </div>
      {/* grid products */}
      <div className="bg-body-secondary container p-5">
        <div className="row">
          {Items.map((data) => (
            <div key={data.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={data.image}
                  style={imagestyle}
                  className="card-img-top"
                  alt={data.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{data.name}</h5>
                  <p className="card-text">Brand: {data.brand}</p>
                  <p className="card-text">Ratings: {data.ratings}</p>
                  <p className="card-text">Price: {data.prize}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => alert(`name:${data.name} \nbrand:${data.brand}\nratings:${data.ratings}\nprize:${data.prize}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductDetails product={selectedProduct} onClose={closeProductDetails} />
      )}
    </div>
  );
};

export default Product;
