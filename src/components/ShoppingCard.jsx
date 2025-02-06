// import React from "react";

// const ShoppingCard = ({ product }) => {
//   // Generate star rating based on product.rating.rate
//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 !== 0;
//     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

//     return (
//       <>
//         {"★".repeat(fullStars)}
//         {halfStar && "☆"}
//         {"☆".repeat(emptyStars)}
//       </>
//     );
//   };

//   return (
//     <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md w-64">
//       {/* Product Image */}
//       <div className="h-[180px] flex items-center justify-center">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="h-full w-auto object-contain"
//         />
//       </div>

//       {/* Product Title */}
//       <p className="text-gray-800 font-semibold text-center mt-3">
//         {product.title}
//       </p>

//       {/* Price */}
//       <p className="text-red-500 font-bold text-lg mt-2">${product.price}</p>

//       {/* Rating */}
//       <div className="flex items-center gap-2 text-yellow-500 text-sm mt-2">
//         <span>{renderStars(product.rating.rate)}</span>
//         <span className="text-gray-500 text-xs">({product.rating.count})</span>
//       </div>

//       {/* Add to Cart Button */}
//       <button className="bg-black text-white px-4 py-2 mt-4 rounded-md w-full hover:bg-gray-800">
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default ShoppingCard;


import React, { useState } from "react";
import ProductModal from "./ProductModal ";

const ShoppingCard = ({ product, onAddToCart }) => {


  const [showModal, setShowModal] = useState(false);

    return (
      <>
        <div
          onClick={() => setShowModal(true)}
          className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md w-64 cursor-pointer"
        >
          {/* Product Image */}
          <div className="h-[180px] flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-auto object-contain"
            />
          </div>
          {/* Product Title */}{" "}
          <p className="text-gray-800 font-semibold text-center mt-3">
            {product.title}{" "}
          </p>
          {/* Price */}{" "}
          <p className="text-red-500 font-bold text-lg mt-2">
            ${product.price}
          </p>
          <button
            onClick={() => onAddToCart}
            className="bg-black text-white px-4 py-2 mt-4 rounded-md w-full hover:bg-gray-800"
          >
            Add to Cart{" "}
          </button>
        </div>

        {showModal && (
          <ProductModal product={product} onClose={() => setShowModal(false)} />
        )}
      </>
    );
};

export default ShoppingCard;
