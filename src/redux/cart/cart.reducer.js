// Note: Do not update/change the initial state
import * as types from "./cart.types"

const cartInitalState = {
  getCartItems: {
    loading: false,
    error: false,
  },
  addCartItem: {
    loading: false,
    error: false,
  },
  updateCartItem: {
    loading: false,
    error: false,
  },
  removeCartItem: {
    loading: false,
    error: false,
  },
  data: [],
};
export const cartReducer = (state = cartInitalState,{type,payload}) => {

   switch(type){
   case types.ADD_ITEM_TO_CART_LOADING:{
    return {
      ...state ,
      ...state.addCartItem,
      loading:true
    }
   }
   case types.ADD_ITEM_TO_CART_SUCCESS:{
    return {
      ...
      state,
    }
   }

    default:{
      return state
    }
   }
};
