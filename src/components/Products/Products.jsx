import React,{useEffect} from "react";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { getProduct } from "../../redux/product/product.actions";
import { store } from "../../redux/store";
import Product from "./Product/Product";


const Products = () => {
   
  const data=useSelector((store)=>store.PostManeger.data)
  console.log(data)
  const dispatch=useDispatch()
 
  
   useEffect(()=>{
    dispatch(getProduct())
     
   },[])
  
  return <div>

      {
        data.map((item)=>{
         return <Product key={item.id} {...item}/>
        })
      }
  </div>;
};

export default Products;
