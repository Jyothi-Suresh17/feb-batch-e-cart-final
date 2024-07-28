import { createSlice } from "@reduxjs/toolkit";

export const wishListSlice = createSlice({
  name:'wishlistSlice',
  initialState:[],

  reducers:{
      //.1)add to wishlist

      addToWishList:(state,actions)=>{
        state.push(actions.payload);
        
      },

      //.2)remove from wishlit
     removeFromWishList:(state,actions)=>{
      return state.filter(item=>item.id!=actions.payload)
      }


  }
});


export const{addToWishList,removeFromWishList} =wishListSlice.actions;

export default wishListSlice.reducer;
