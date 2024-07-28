import { createSlice } from "@reduxjs/toolkit";


 export const cartSlice=createSlice({

  name:'cartSlice',
  initialState:[],
  reducers:{

    //add to cart
    addToCart:(state,action)=>{
      state.push(action.payload);

    },

    //remove from cart
    removeFromCart:(state,action)=>{
     return state.filter(item=>item.id!=action.payload)

    },
    //to empty the cart after checkout

    emptyCart:(state)=>{
      return state=[]
    }
  }

}

)

export const {addToCart,removeFromCart,emptyCart}=cartSlice.actions;
export default cartSlice.reducer;