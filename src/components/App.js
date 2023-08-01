import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import {useState} from 'react'

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [appClass, setAppClass] = useState (false) // we're setting the initial state

  function toggleAppClass() {
    setAppClass ((appClass) => !appClass) // using a callback function is the safest way to change state
  }

  return (
    <div className={appClass ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleAppClass}>{appClass ? `Light Mode` : `Dark Mode`}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
