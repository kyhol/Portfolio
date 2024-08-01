import React, { useState } from "react";
import "./ToDoList.css";

const TodoList = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim() === "") return;

    setItems([...items, { text: inputValue, completed: false }]);
    setInputValue("");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addItem();
    }
  };

  const toggleItemCompletion = (index) => {
    setItems(
      items.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="nav">
        <h2>
          <i className="fa-solid fa-clipboard-check"></i> To-Do List
        </h2>
        <div className="user-input">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button onClick={addItem}>Submit</button>
        </div>
      </div>
      <div className="to-do-items">
        {items.map((item, index) => (
          <div key={index} className="item">
            <div
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.text}
            </div>
            <div>
              <i
                className={`fas fa-check-square ${
                  item.completed ? "completed" : ""
                }`}
                onClick={() => toggleItemCompletion(index)}
              ></i>
              <i className="fas fa-trash" onClick={() => removeItem(index)}></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
