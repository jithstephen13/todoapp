// Note: Do not update/change the initial state
import * as types from './auth.types'
export const authInitalState = {
  loading: false,
  
    token: "",
    isAuthenticated: false,
 
  error: false,
};

export const authReducer = (state = authInitalState,{type,payload}) => {
  switch(type){
    case types.AUTH_SIGN_IN_LOADING:{
     
      return {
        ...state,
        loading:true
      }
    }
    case types.AUTH_SIGN_IN_SUCCESS:{
      return {
        ...state,
        loading:false,
        token:payload       ,
        isAuthenticated:true
      }
    }
    case types.AUTH_SIGN_IN_ERROR:{
      return {
        ...state,
        loading:false,
        error:true
      }
    }
    default :{
      return state
    }

  }
};
