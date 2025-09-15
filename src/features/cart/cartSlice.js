// src/features/cart/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // items keyed by id: { id, name, price, img, category, quantity }
  items: {}
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      if (state.items[product.id]) {
        // already present → increment (but product list disables Add button after first add)
        state.items[product.id].quantity += 1;
      } else {
        state.items[product.id] = { ...product, quantity: 1 };
      }
    },
    increase: (state, action) => {
      const id = action.payload;
      if (state.items[id]) state.items[id].quantity += 1;
    },
    decrease: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity -= 1;
        if (state.items[id].quantity <= 0) {
          delete state.items[id];
        }
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      delete state.items[id];
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const { addItem, increase, decrease, removeItem, clearCart } =
  cartSlice.actions;

// selectors:
export const selectCartItemsArray = (state) =>
  Object.values(state.cart.items);

export const selectTotalCount = (state) =>
  Object.values(state.cart.items).reduce((sum, it) => sum + it.quantity, 0);

export const selectTotalPrice = (state) =>
  Object.values(state.cart.items).reduce(
    (sum, it) => sum + it.quantity * it.price,
    0
  );

export default cartSlice.reducer;
