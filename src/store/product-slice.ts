import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CardDataType } from "../types";

interface ProductState {
  products: CardDataType[];
  searchTerm: string;
}

const initialState: ProductState = {
  products: [],
  searchTerm: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<ProductState[]>) {
      state.products = action.payload;
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
});

export const { setProducts, setSearchTerm } = productSlice.actions;
export default productSlice.reducer;
