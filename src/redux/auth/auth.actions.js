// Auth Actions here
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import * as types from './auth.types'


export const Loginfun=(crerd)=>async(dispatch)=>{
 
  
    dispatch({type:types.AUTH_SIGN_IN_LOADING})

    try {
     let res = await axios.post('https://reqres.in/api/login',crerd) 
     console.log(res.data.token)
     dispatch({type:types.AUTH_SIGN_IN_SUCCESS,payload:res.data.token}) 
        
    } catch (error) { 
        dispatch({type:types.AUTH_SIGN_IN_ERROR,payload:error.message})
    }


}
