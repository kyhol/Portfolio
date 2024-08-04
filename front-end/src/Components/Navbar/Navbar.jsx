import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <p>Portfolio</p>
      <ul className="nav-menu">
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/grocery-list">Grocery List</Link>
        </li>
        <li>
          <Link to="/carousel">Carousel</Link>
        </li>
        <li>
          <Link to="/snake-game">Snake Game</Link>
        </li>
        <li>
          <Link to="/stopwatch">Stopwatch</Link>
        </li>
        <li>
          <Link to="/text-to-speech">Text to Speech</Link>
        </li>
        <li>
          <Link to="/todo-list">Todo List</Link>
        </li>
        <li>
          <Link to="/weather-app">Weather App</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
