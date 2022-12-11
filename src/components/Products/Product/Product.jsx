import React,{useState} from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { AddCart } from "../../../redux/cart/cart.actions";

const Product = ({id,name,description}) => {
  // You can change this variable value to each product id
  const dispatch=useDispatch()

  const handleClick=()=>{
   const count=0
    dispatch(AddCart({
      producyId:id,
      cont:c
    }))

  }
   
  return (
    <div data-cy={`product-${id}`}>
      <h3 data-cy="product-name">{name}</h3>
      <h6 data-cy="product-description">{description}</h6>
      <button data-cy="product-add-item-to-cart-button"   > Add To cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">0</span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button">Remove</button>
      </div>
    </div>
  );
};

export default Product;
