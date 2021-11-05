import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit, newItemName, newItemCategory, items, input, formNameChange, categoryTypeChange}) {
  const newItem = {
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: newItemName,
    category: newItemCategory,
  };

  const arrayWithNewItem = [...items, newItem]
  console.log("these are the new items", arrayWithNewItem)

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={input} onChange={formNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={categoryTypeChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
