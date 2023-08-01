import React from "react";
import Item from "./Item";
import {useState} from 'react'

function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState ("All")

  function handleChange(e) {
    console.log(e.target.value)
    setSelectedCategory(e.target.value);
  }

  const itemsToDisplay = items.filter((item) => { //filter the items through an iterator
    return selectedCategory === "All" // we add return because we want the new array of items that hold "true" and not the ones that are "false"
    ? true 
    : item.category === selectedCategory 

    // if (selectedCategory === "All") {
    //   return true;
    // } else {
    //   return item.category === selectedCategory
    // }
  })

  console.log(itemsToDisplay)

  // const handleCategoryChange = (event) => {
  //   setSelectedCategory(event.target.value)
  // }

  // // filter the items based on category
  // const filteredItems = selectedCategory === "All" ? items : items.filter{item => item.category === selectedCategory}

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
