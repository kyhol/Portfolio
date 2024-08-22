import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const navBarName = (
  <>
    <span className="default-font">&lt;</span>
    Kyle Hollett
    <span className="default-font">&gt;</span>
  </>
);

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <p className="navbar-name cedarville-cursive-regular">{navBarName}</p>
      </div>
      <div className="navbar-right">
        <Link to="/">Home</Link>
        <div className="dropdown">
          <button className="dropbtn">Projects</button>
          <ul className="dropdown-content">
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
        <Link to="/about-me">About Me</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
