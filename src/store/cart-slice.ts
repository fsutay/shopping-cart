import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cart, CartItem } from '../interface';

const initialState: Cart = {
  cartItems: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const cartItem = state.cartItems.find((cart) => cart.id === action.payload.id);

      if (cartItem) {
        cartItem.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    decreaseCartQuantity: (state, action: PayloadAction<number>) => {
      const cartItem = state.cartItems.find((cart) => cart.id === action.payload);

      if (cartItem && cartItem.quantity > 0) {
        cartItem.quantity--;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload);
    },
  },
});

export const { addToCart, decreaseCartQuantity, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
