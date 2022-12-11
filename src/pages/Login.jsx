
import React from "react";
import {useState , useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { Loginfun } from "../redux/auth/auth.actions";


const Login = () => {

  const [crerd,setCread]=useState({})
 const Navigate=useNavigate()
  const {isAuthenticated} =useSelector((store)=>store.AuthManager)
  const dispatch=useDispatch()
 
   
  const handleChenge=(e)=>{
    const {name,value}=e.target
    console.log(name,value)
    setCread({
      ...crerd,
      [name]:value
    })

  }

  const handleSubmit=(e)=>{
  e.preventDefault()

  dispatch(Loginfun(crerd))

  }
  console.log(isAuthenticated)

  useEffect(()=>{
    if(isAuthenticated){
      Navigate("/")
    }
  },[])

  return (
    <div>
      <form style={{display:"flex", flexDirection:"column", }} onSubmit={handleSubmit}>
        <input data-cy="login-email" name="email" onChange={handleChenge} />
        <input data-cy="login-password" name="password"  onChange={handleChenge} />
        <button data-cy="login-submit" type="submit">Log in </button>
      </form>
    </div>
  );
};

export default Login;
