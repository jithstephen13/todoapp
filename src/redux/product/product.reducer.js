// Note: Do not update/change the initial state
import * as types from "./product.types"

const productInitalState = {
  loading: false,
  error: false,
  data: [],
};

export const productReducer = (state = productInitalState,{type,payload}) => {

  switch (type){
    case types.GET_PRODUCTS_ERROR:{
      return {
        ...state,
        loading:false,
        error:true
      }
    }
    case types.GET_PRODUCTS_SUCCESS:{
      return {
        ...state,
        loading:false,
        data:payload
      }
    }
    case types.GET_PRODUCTS_LOADING:{
      return {
        ...state,loading:true
      }
    }
   
    default:{
      return state
    }
  }


  return state;
};
