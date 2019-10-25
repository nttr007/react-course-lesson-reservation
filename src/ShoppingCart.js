import React from 'react';
import CartContainer from "./CartContainer"
import {useSelector} from "react-redux"

const ShoppingCart = () => {
  const items = useSelector(state=> state.hotels);

  return (
  
    <CartContainer>
      <p>
        <b>{items.length}</b> items
      </p>
      <ul>
       {items.map(function(item,index){
         return <li key={index}>{item}</li>
       })
      }
      </ul>
    </CartContainer>
  );
  }
  
  export default ShoppingCart