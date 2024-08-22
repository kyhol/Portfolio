import React, { useState } from "react";
import { FaCheckSquare, FaTrash, FaClipboardCheck } from "react-icons/fa";
import "./ToDoList.css";
import Button from "../ReturnToPortfolioButton/ReturnToPortfolioButton";

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
    <div>
      <Button className="returnToPortfolioButton" />
      <div className="container">
        <div className="nav">
          <h2>
            <FaClipboardCheck /> To-Do List
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
                <FaCheckSquare
                  className={`check-icon ${item.completed ? "completed" : ""}`}
                  onClick={() => toggleItemCompletion(index)}
                />
                <FaTrash
                  className="trash-icon"
                  onClick={() => removeItem(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
