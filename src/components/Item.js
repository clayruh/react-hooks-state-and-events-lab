import React from "react";
import {useState} from 'react'

function Item({ name, category }) {

  // what is the initial state?
  const [isInCart, setIsInCart] = useState (false)

  function handleClick() {
    setIsInCart ((isInCart) => !isInCart)
  }  

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "add"}
        onClick={handleClick}
      >{isInCart ? `Remove From Cart` : `Add to Cart`}</button>
    </li>
  );
}

export default Item;
