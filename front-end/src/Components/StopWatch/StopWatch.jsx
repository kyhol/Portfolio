import React, { useState, useRef, useCallback, useEffect } from "react";
import "./StopWatch.css";
import Button from "../ReturnToPortfolioButton/ReturnToPortfolioButton";

const Stopwatch = () => {
  const [running, setRunning] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [displayTime, setDisplayTime] = useState("00:00:00:00");

  const timerRef = useRef(null);

  const update = useCallback(() => {
    const currentTime = Date.now();
    const newElapsedTime = currentTime - startTime;
    setElapsedTime(newElapsedTime);

    const hours = Math.floor(newElapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((newElapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((newElapsedTime / 1000) % 60);
    const milliseconds = Math.floor((newElapsedTime % 1000) / 10);

    setDisplayTime(
      `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
        2,
        "0"
      )}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(
        2,
        "0"
      )}`
    );
  }, [startTime]);

  useEffect(() => {
    if (running) {
      timerRef.current = setInterval(update, 10);
      return () => clearInterval(timerRef.current);
    }
  }, [running, update]);

  const start = () => {
    if (!running) {
      setStartTime(Date.now() - elapsedTime);
      setRunning(true);
    }
  };

  const stop = () => {
    if (running) {
      clearInterval(timerRef.current);
      setElapsedTime(Date.now() - startTime);
      setRunning(false);
    }
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setElapsedTime(0);
    setDisplayTime("00:00:00:00");
    setRunning(false);
  };

  return (
    <div>
      <Button className="returnToPortfolioButton" />
      <div id="container">
        <h1 id="myh1">Stopwatch</h1>
        <div id="display">{displayTime}</div>
        <div id="controls">
          <button id="startBtn" onClick={start}>
            Start
          </button>
          <button id="stopBtn" onClick={stop}>
            Stop
          </button>
          <button id="resetBtn" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
