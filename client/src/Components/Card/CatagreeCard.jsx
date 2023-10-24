import React from 'react';
import catagreeData from '../../data/catagreedata';

const CatagreeCard = () => {
  return (
    <div className="container mt-2 rounded-2 bg-secondary">
      <div className="p-3 d-flex justify-content-evenly">
        {catagreeData.map((item) => (
          <CardCatagtee key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function CardCatagtee({ item }) {
  return (
    <div className="card pointer text-center" >
      <img
        src={item.image}
        className="card-img-top "
        style={{ width: '8rem', height: '6rem' }} // Adjust the width and height as needed
        alt={item.title}
      />
      <div className="card-body">
        <p className="card-title ">{item.title}</p>
      </div>
    </div>
  );
}

export default CatagreeCard;


// import React from 'react';
// import { useParams } from 'react-router-dom';

// const CatagreeCard = () => {
//   const catagreeData = [
//     {
//       "id": 1,
//       "title": "Category 1",
//     },
//     {
//       "id": 2,
//       "title": "Category 2",
//     },
//   ];

//   const { id } = useParams();
//   const selectedCategory = catagreeData.find(item => item.id === Number(id));

//   if (!selectedCategory) {
//     return <div>Category not found</div>;
//   }

//   return (
//     <div className="container bg-primary">
//       <div className="p-3">
//         <div>
//           <img src={selectedCategory.image} alt={selectedCategory.title} />
//           <p>{selectedCategory.title}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CatagreeCard;
