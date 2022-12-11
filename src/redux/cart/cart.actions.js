// Cart Actions here
import axios from 'axios'
import * as type from "./cart.types"

export const getCart=()=>async(dispatch)=>{
    dispatch(type)
    try {
        dispatch(type)
    } catch (error) {
        dispatch(type)
        
    }


}

export const AddCart=(cred)=>async(dispatch)=>{
    dispatch({type:type.ADD_ITEM_TO_CART_LOADING})
    try {
       
        let res =await axios.post('http://localhost:8080/cartItems',cred)
        dispatch({type:type.ADD_ITEM_TO_CART_SUCCESS,payload:res.data})
    } catch (error) {
         dispatch({type:type.ADD_ITEM_TO_CART_ERROR})
        
    }
    
}

export const UpdateCart=(cred)=>async(dispatch)=>{
    dispatch(type)
    try {
        dispatch(type)
    } catch (error) {
        dispatch(type)
        
    }
    
}
export const DeleteCart=(cred)=>async(dispatch)=>{
    dispatch(type)
    try {
        dispatch(type)
    } catch (error) {
        dispatch(type)
        
    }
    
}

