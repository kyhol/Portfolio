import React, { useState } from "react";
import "./Calculator.css";

// Basic arithmetic expression evaluator
const calculateExpression = (expression) => {
  // Tokenize the input expression
  const tokens = expression.match(/\d+|\D+/g);
  const values = [];
  const operators = [];

  // Helper function to apply an operator to two values
  const applyOperator = () => {
    const right = values.pop();
    const left = values.pop();
    const operator = operators.pop();

    switch (operator) {
      case "+":
        values.push(left + right);
        break;
      case "-":
        values.push(left - right);
        break;
      case "*":
        values.push(left * right);
        break;
      case "/":
        values.push(left / right);
        break;
      default:
        throw new Error("Unknown operator");
    }
  };

  // Function to handle precedence of operators
  const precedence = (op) => {
    if (op === "+" || op === "-") return 1;
    if (op === "*" || op === "/") return 2;
    return 0;
  };

  // Parsing tokens
  tokens.forEach((token) => {
    if (/\d/.test(token)) {
      values.push(parseFloat(token));
    } else if (["+", "-", "*", "/"].includes(token)) {
      while (
        operators.length &&
        precedence(operators[operators.length - 1]) >= precedence(token)
      ) {
        applyOperator();
      }
      operators.push(token);
    }
  });

  // Apply remaining operators
  while (operators.length) {
    applyOperator();
  }

  return values[0];
};

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const appendToDisplay = (input) => {
    setDisplay(display + input);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const calculate = () => {
    try {
      setDisplay(calculateExpression(display).toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  return (
    <div className="calcContainer">
      <div className="calculator">
        <input id="display" value={display} readOnly />
        <div className="keys">
          <button onClick={() => appendToDisplay("7")}>7</button>
          <button onClick={() => appendToDisplay("8")}>8</button>
          <button onClick={() => appendToDisplay("9")}>9</button>
          <button onClick={() => appendToDisplay("+")} className="operator-btn">
            +
          </button>
          <button onClick={() => appendToDisplay("4")}>4</button>
          <button onClick={() => appendToDisplay("5")}>5</button>
          <button onClick={() => appendToDisplay("6")}>6</button>
          <button onClick={() => appendToDisplay("-")} className="operator-btn">
            -
          </button>
          <button onClick={() => appendToDisplay("1")}>1</button>
          <button onClick={() => appendToDisplay("2")}>2</button>
          <button onClick={() => appendToDisplay("3")}>3</button>
          <button onClick={() => appendToDisplay("*")} className="operator-btn">
            *
          </button>
          <button onClick={() => appendToDisplay("0")}>0</button>
          <button onClick={() => appendToDisplay(".")}>.</button>
          <button onClick={() => appendToDisplay("/")} className="operator-btn">
            /
          </button>
          <button onClick={clearDisplay} className="operator-btn">
            C
          </button>
          <button id="calculate" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
