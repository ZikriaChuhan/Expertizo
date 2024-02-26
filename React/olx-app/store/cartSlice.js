// import { createSlice } from '@reduxjs/toolkit'

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: {
//         cart: []
//     },
//     reducers: {
//         addToCart: (state, data) => {
//             state.cart.push(data.payload)
            
//         },
//         removeFromCart: (state, data) => {
//             state.cart = state.cart.filter(item => item.id !== data.payload.itemId);
//         }
//     }
// })

// export const { addToCart, removeFromCart } = cartSlice.actions
// export default cartSlice



import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: []
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.cart.find(item => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.cart = state.cart.filter(item => item.id !== itemIdToRemove);
    },
    increaseQuantity: (state, action) => {
      const itemIdToIncrease = action.payload;
      const existingProduct = state.cart.find(item => item.id === itemIdToIncrease);

      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemIdToDecrease = action.payload;
      const existingProduct = state.cart.find(item => item.id === itemIdToDecrease);

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      }
    }
  }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice;
