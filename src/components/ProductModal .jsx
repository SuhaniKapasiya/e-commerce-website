import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { RxCrossCircled } from "react-icons/rx";

const ProductModal = ({ product, onClose }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const maxDescriptionLength = 100; // Limit for "Show More"

  if (!product) return null;

  const handleQuantityChange = (type) => {
    setQuantity((prev) => {
      return type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : 1;
    });
  };

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-3xl shadow-lg max-w-lg w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-gray-900"
        >
          <RxCrossCircled />
        </button>

        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Product Image */}
          <img
            src={product.image}
            alt={product.title}
            className="w-40 h-40 object-contain rounded-lg"
          />

          {/* Product Info */}
          <div className="flex flex-col flex-1">
            <h2 className="text-lg font-semibold text-gray-900">
              {product.title}
            </h2>

            {/* Description with Show More */}
            <p className="text-gray-600 mt-1">
              {showFullDescription ||
              product.description.length <= maxDescriptionLength
                ? product.description
                : `${product.description.substring(
                    0,
                    maxDescriptionLength
                  )}... `}
              {product.description.length > maxDescriptionLength && (
                <button
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="text-blue-600 font-medium"
                >
                  {showFullDescription ? "Show Less" : "Show More"}
                </button>
              )}
            </p>

            {/* Price */}
            <p className="text-xl font-bold text-gray-900 mt-2">
              ${product.price}
            </p>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center border rounded-lg px-3 py-1 border-gray-950">
                <button
                  onClick={() => handleQuantityChange("decrease")}
                  className="px-3 text-lg text-gray-700"
                >
                  -
                </button>
                <span className="px-4 text-gray-900 font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange("increase")}
                  className="px-3 text-lg text-gray-700"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 flex-1"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
