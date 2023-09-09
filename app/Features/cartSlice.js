"use client"

import {createSlice} from "@reduxjs/toolkit";



export const cartSlice = createSlice({
    name:'cart',
    initialState: [],
    reducers:{
        addToCart(state, action){
          const isItemInCart = state.find((pro)=> pro.id ===action.payload.id)
            if(isItemInCart){
                return ;
            }
            state.push(action.payload)
        },
        remove(state,action){
            const filtered = state.filter((item)=> item.id !==action.payload.id);
            return filtered
        }
    }
})

export  const {addToCart, remove} = cartSlice.actions;
export default cartSlice.reducer;

