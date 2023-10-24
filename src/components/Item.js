import React, { useState } from "react";

function Item({ name, category }) {
  const [item, setItem] = useState(false)

  function itemHandler(){
    setItem(() => !item)
  }

  const itemClass = item ? "in-cart" : "" 
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={itemHandler}>{item ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
