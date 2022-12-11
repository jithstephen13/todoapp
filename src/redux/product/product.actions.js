// Product actions here
import axios from 'axios'
import * as types from './product.types'


export  const getProduct=()=>async(dispatch)=>{
    dispatch({type:types.GET_PRODUCTS_LOADING})
    try {
        let res=await axios.get(`http://localhost:8080/products`)
        console.log(res)

        dispatch({type:types.GET_PRODUCTS_SUCCESS,payload:res.data})
        
    } catch (error) {

          dispatch({type:types.GET_PRODUCTS_ERROR,payload:error.message})
    }

}
