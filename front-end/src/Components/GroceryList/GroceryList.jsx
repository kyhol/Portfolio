import React, { useState } from "react";
import "./GroceryList.css"; // Make sure to create this CSS file

const GroceryList = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, { text: input, done: false }]);
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  const clearItems = () => {
    setItems([]);
  };

  const toggleItem = (index) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], done: !newItems[index].done };
    setItems(newItems);
  };

  return (
    <div className="container">
      <div className="groceries">
        <h1 style={{ textAlign: "center" }}>Grocery List</h1>
        <div style={{ textAlign: "center" }}>
          <i
            id="pencil"
            className="fa-solid fa-pencil"
            onClick={clearItems}
          ></i>
          <input
            id="userInput"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <br />
        <div id="allItems">
          {items.map((item, index) => (
            <h2
              key={index}
              onClick={() => toggleItem(index)}
              style={{ textDecoration: item.done ? "line-through" : "none" }}
            >
              - {item.text}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroceryList;
