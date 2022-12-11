import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { store } from "../redux/store";

const RequiredAuth = ({ children }) => {
  const navigate=useNavigate()
  const {isAuthenticated}=useSelector((store)=>store.AuthManager)

  if (isAuthenticated){
    return  children
  }
  else{
    navigate("/login")

  }


 
};

export default RequiredAuth;
