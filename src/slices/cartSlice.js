import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // items keyed by product id: { product: {...}, quantity: number }
  items: {},
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      if (state.items[product.id]) {
        state.items[product.id].quantity += 1
      } else {
        state.items[product.id] = { product, quantity: 1 }
      }
    },
    increase: (state, action) => {
      const id = action.payload
      if (state.items[id]) state.items[id].quantity += 1
    },
    decrease: (state, action) => {
      const id = action.payload
      if (state.items[id]) {
        state.items[id].quantity -= 1
        if (state.items[id].quantity <= 0) delete state.items[id]
      }
    },
    removeItem: (state, action) => {
      const id = action.payload
      if (state.items[id]) delete state.items[id]
    },
    clearCart: (state) => {
      state.items = {}
    },
  },
})

export const { addToCart, increase, decrease, removeItem, clearCart } = cartSlice.actions

// Selectors
export const selectCartItems = (state) => state.cart.items
export const selectTotalItems = (state) =>
  Object.values(state.cart.items).reduce((sum, it) => sum + it.quantity, 0)
export const selectTotalCost = (state) =>
  Object.values(state.cart.items).reduce((sum, it) => sum + it.quantity * it.product.price, 0)

export default cartSlice.reducer
