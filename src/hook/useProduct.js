import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  setFilteredProducts,
  setCategories,
  setLoading,
  setError,
} from "../utils/productSlice";

const useProductAPI = () => {

  const dispatch = useDispatch();

  // Access products, categories, loading, and error state from Redux store
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);
  const categories = useSelector((state) => state.products.categories);

  useEffect(() => {
    fetchProductData();
    fetchCategories();
  }, []); 

  // Fetch products from API and store them in Redux store
  const fetchProductData = async () => {
    try {

      dispatch(setLoading(true)); 

      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();

      dispatch(setProducts(json));
      dispatch(setFilteredProducts(json)); 

    } catch (error) {
      dispatch(setError(error.message)); 
    } finally {
      dispatch(setLoading(false)); 
    }
  };

  // Fetch categories from API and store them in Redux store
  const fetchCategories = async () => {
    try {
      dispatch(setLoading(true)); // Set loading state to true
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const json = await response.json();
      dispatch(setCategories(json)); 
    } catch (error) {
      dispatch(setError(error.message)); 
    } finally {
      dispatch(setLoading(false)); 
    }
  };

  // Filter products by category
  const filterByCategory = (category) => {
  
    const filtered = category
      ? products.filter((product) => product.category === category)
      : products;
    dispatch(setFilteredProducts(filtered)); // Update filtered products in store
  };

  return {
    filterByCategory,
    products, // The full list of products
    categories, // Categories list
    loading, // Loading state
  };
};

export default useProductAPI;

