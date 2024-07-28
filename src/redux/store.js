import { configureStore } from "@reduxjs/toolkit";
import  wishListSlice  from "./slice/wishlistSlice";
import cartSlice from "./slice/cartSlice";


const store=configureStore(

  {
    reducer:{
      wishListreducer:wishListSlice,
      cartListReducer:cartSlice
    }
  }
)

export default store