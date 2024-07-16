import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  total: localStorage.getItem("total") ? JSON.parse(localStorage.getItem("total")) : 0,
  totalItems: localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")) : 0,
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      state.cart.push(item.productData); // map will directly use id, title...
      state.totalItems++
      state.total += item.productData.price
      localStorage.setItem("cart", JSON.stringify(state.cart))
      localStorage.setItem("total", JSON.stringify(state.total))
      localStorage.setItem("totalItems", JSON.stringify(state.totalItems))    
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const index = state.cart.findIndex((item) => item.id === itemId)
      if (index >= 0) {           
        state.totalItems--;
        state.total -= state.cart[index].price
        state.cart.splice(index, 1) 
        localStorage.setItem("cart", JSON.stringify(state.cart))
        localStorage.setItem("total", JSON.stringify(state.total))
        localStorage.setItem("totalItems", JSON.stringify(state.totalItems)) 
        console.log("Item removed from cart")
      }
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer