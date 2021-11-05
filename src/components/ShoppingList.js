import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";



function ShoppingList({ items, setItems }) {
  // const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedName, setSelectedName] = useState("");
  const [newItemName, setNewItemName] = useState("");
  const [newItemCategory, setNewItemCategory] = useState("produce");
  const [input, setInput] = useState('')
  const [categoryType, setCategoryType] = useState('produce')



  // function handleCategoryChange(event) {
  //   setSelectedCategory(event.target.value);
  // }

  function handleNameChange (event) {
    console.log('hello there')
    setSelectedName(event.target.value);
  }

  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: input,
    category: categoryType,
  }

  function handleFormSubmission (event){
    event.preventDefault()
    console.log('form has been subbed');
    console.log(event.target.input)
    setItems([...items, newItem])

    // setNewItemName(input)
    // //console.log("yoyoyo", event.target.input.value)
    // setNewItemCategory(categoryType)
  }

function formNameChange(e) {
  setInput(e.target.value)
}

function categoryTypeChange(e) {
  setCategoryType(e.target.value)
}


  // const itemsToDisplay = items.filter((item) => {
  //   if (selectedCategory === "All") return true;

  //   return item.category === selectedCategory;
  // });

  const newItemsToDisplay = items.filter((item) => {
    if (selectedName === '') return true;
    return item.name.toLowerCase().includes(selectedName.toLowerCase());
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleFormSubmission} newItemName={newItemName} newItemCategory={newItemCategory} items={items} input={input} formNameChange={formNameChange} categoryTypeChange={categoryTypeChange}/>
      <Filter  onNameChange={handleNameChange}/>
      <ul className="Items">
        {newItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
