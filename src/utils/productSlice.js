import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  products: [],
  filteredProducts: [],
  categories: [],
  loading: false,
  error: null,

};

const productSlice = createSlice({

  name: "products",
  initialState,
  
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload; // Initially, all products are shown
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setProducts,
  setFilteredProducts,
  setCategories,
  setLoading,
  setError,
} = productSlice.actions;
export default productSlice.reducer;
