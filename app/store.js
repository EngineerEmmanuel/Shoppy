"use client"


import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../Features/cartSlice'; 






 const store = configureStore({
  reducer: {
    cart: cartSlice.reducer, 
    
  },
});

export default store;


