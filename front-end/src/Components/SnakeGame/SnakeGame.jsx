import React, { useState, useEffect, useRef, useCallback } from "react";
import "./SnakeGame.css"; // Ensure this path is correct

const unitSize = 25;
const gameWidth = 500;
const gameHeight = 500;
const boardBackground = "white";
const snakeColor = "green";
const snakeBorder = "black";

const SnakeGame = () => {
  const [running, setRunning] = useState(false);
  const [xVelocity, setXVelocity] = useState(unitSize);
  const [yVelocity, setYVelocity] = useState(0);
  const [foodX, setFoodX] = useState(0);
  const [foodY, setFoodY] = useState(0);
  const [score, setScore] = useState(0);
  const [snake, setSnake] = useState([
    { x: unitSize * 4, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: unitSize, y: 0 },
    { x: 0, y: 0 },
  ]);

  const canvasRef = useRef(null);

  const drawGame = useCallback(
    (ctx) => {
      ctx.fillStyle = boardBackground;
      ctx.fillRect(0, 0, gameWidth, gameHeight);

      ctx.fillStyle = snakeColor;
      ctx.strokeStyle = snakeBorder;
      snake.forEach((part) => {
        ctx.fillRect(part.x, part.y, unitSize, unitSize);
        ctx.strokeRect(part.x, part.y, unitSize, unitSize);
      });

      const pizzaImage = new Image();
      pizzaImage.src =
        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM96 384a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>';
      pizzaImage.onload = () => {
        ctx.drawImage(pizzaImage, foodX, foodY, unitSize, unitSize);
      };
    },
    [snake, foodX, foodY]
  );

  const moveSnake = useCallback(() => {
    const head = { x: snake[0].x + xVelocity, y: snake[0].y + yVelocity };
    setSnake((prevSnake) => {
      const newSnake = [head, ...prevSnake];
      if (head.x === foodX && head.y === foodY) {
        setScore(score + 1);
        createFood();
      } else {
        newSnake.pop();
      }
      return newSnake;
    });
  }, [snake, xVelocity, yVelocity, foodX, foodY, score]);

  const checkGameOver = useCallback(() => {
    const head = snake[0];
    if (
      head.x < 0 ||
      head.x >= gameWidth ||
      head.y < 0 ||
      head.y >= gameHeight ||
      snake.slice(1).some((part) => part.x === head.x && part.y === head.y)
    ) {
      setRunning(false);
    }
  }, [snake]);

  const updateGame = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    clearBoard(ctx);
    moveSnake();
    drawGame(ctx);
    checkGameOver();
  }, [drawGame, moveSnake, checkGameOver]);

  useEffect(() => {
    if (running) {
      const interval = setInterval(updateGame, 75);
      return () => clearInterval(interval);
    }
  }, [running, updateGame]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const keyPressed = event.keyCode;
      const LEFT = 37;
      const UP = 38;
      const RIGHT = 39;
      const DOWN = 40;

      const goingUp = yVelocity === -unitSize;
      const goingDown = yVelocity === unitSize;
      const goingRight = xVelocity === unitSize;
      const goingLeft = xVelocity === -unitSize;

      switch (true) {
        case keyPressed === LEFT && !goingRight:
          setXVelocity(-unitSize);
          setYVelocity(0);
          break;
        case keyPressed === UP && !goingDown:
          setXVelocity(0);
          setYVelocity(-unitSize);
          break;
        case keyPressed === RIGHT && !goingLeft:
          setXVelocity(unitSize);
          setYVelocity(0);
          break;
        case keyPressed === DOWN && !goingUp:
          setXVelocity(0);
          setYVelocity(unitSize);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [xVelocity, yVelocity]);

  const clearBoard = (ctx) => {
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
  };

  const createFood = () => {
    function randomFood(min, max) {
      const randNum =
        Math.floor((Math.random() * (max - min) + min) / unitSize) * unitSize;
      return randNum;
    }
    setFoodX(randomFood(0, gameWidth - unitSize));
    setFoodY(randomFood(0, gameHeight - unitSize));
  };

  const resetGame = () => {
    setScore(0);
    setXVelocity(unitSize);
    setYVelocity(0);
    setSnake([
      { x: unitSize * 4, y: 0 },
      { x: unitSize * 3, y: 0 },
      { x: unitSize * 2, y: 0 },
      { x: unitSize, y: 0 },
      { x: 0, y: 0 },
    ]);
    setRunning(true);
    createFood();
  };

  return (
    <div id="gameContainer">
      <canvas
        ref={canvasRef}
        id="gameBoard"
        width={gameWidth}
        height={gameHeight}
      />
      <div id="scoreText">{score}</div>
      <button id="resetBtn" onClick={resetGame}>
        Reset
      </button>
      {!running && <div className="game-over">Game Over!</div>}
    </div>
  );
};

export default SnakeGame;
