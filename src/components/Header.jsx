import React from "react";
import { useSelector } from "react-redux";
import useProductAPI from "../hook/useProduct";

const Header = () => {
  const { categories, filterByCategory } = useProductAPI();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  // Handle category selection
  const onCategorySelect = (category) => {
    console.log("Selected Category:", category);
    filterByCategory(category);
  };

  return (
    <header className="flex flex-wrap items-center justify-between bg-white p-4 shadow-md">
      {/* Title */}
      <h1 className="text-xl md:text-2xl font-bold">My Store</h1>

   
      <div className="flex items-center gap-4">
        {/* Category Dropdown */}
        <select
          className="border p-2 rounded-md text-sm md:text-base"
          onChange={(e) => onCategorySelect(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.toUpperCase()}
            </option>
          ))}
        </select>

        {/* Cart Icon */}
        <div className="relative">
          <span className="text-2xl md:text-3xl cursor-pointer">🛒</span>
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs md:text-sm rounded-full px-2">
              {totalQuantity}
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
