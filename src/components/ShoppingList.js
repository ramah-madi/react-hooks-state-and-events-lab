import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  function categoryHandler(event) {
     setSelectedCategory(() => event.target.value)
  }
  const categoryFilter = items.filter((item) => {
            if(  selectedCategory === item.category){
           return true
            }
            else if(selectedCategory === 'All') {
              return item            
            }
            else{
              return false
            }
  }) 

  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={categoryHandler}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {categoryFilter.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
