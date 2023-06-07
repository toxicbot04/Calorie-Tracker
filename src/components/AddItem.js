import { useState } from "react";
export default function AddItem(props) {
  let callback = props.callback;
  let [itemName, setItemName] = useState("");
  let [calories, setCalories] = useState("");
  return (
    <div className="add-item">
      <div className="add-item-title">Add Item!</div>
      <input
        className="item-name-input"
        value={itemName}
        placeholder="Item Name"
        onChange={(e) => setItemName(e.target.value)}
      ></input>
      <input
        className="calories-input"
        value={calories}
        onChange={(e) => setCalories(e.target.value * 1)}
        placeholder="Calories"
      ></input>
      <button
        onClick={() => {
          setItemName("");
          setCalories("");
          callback(itemName, calories);
        }}
      >
        Add Item!
      </button>
    </div>
  );
}