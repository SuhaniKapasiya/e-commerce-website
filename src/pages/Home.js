import useProductAPI from "../hook/useProduct";
import ShoppingCard from "../components/ShoppingCard";
import { Shimmer } from "react-shimmer";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import {  useSelector } from "react-redux";

const Home = () => {
  
  const {  loading } = useProductAPI();

 const filteredProducts = useSelector(
   (state) => state.products.filteredProducts
 );

  const dispatch = useDispatch();

  return (
    <div className="bg-slate-200 p-4 min-h-screen">
      {/* Shimmer Loader */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md w-64 h-[280px] flex items-center justify-center"
            >
              <Shimmer width={200} height={250} />
            </div>
          ))}
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  lg:gap-5 gap-6">
          {filteredProducts.map((product) => (
            <ShoppingCard
              key={product.id}
              product={product}
              onAddToCart={() => dispatch(addItem(product))}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-64 text-gray-700 text-lg font-semibold">
          No Products Available
        </div>
      )}
    </div>
  );
};

export default Home;
