import React from "react";
import "./LandingPage.css";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import "../ProjectContainer/ProjectContainer.css";
import CalculatorImage from "./Assets/image1.png";
import TextToSpeechImage from "./Assets/image2.png";
import SnakeGameImage from "./Assets/image3.png";
import WeatherAppImage from "./Assets/image5.png";
import LanguageExperience from "../LanguageExperience/LanguageExperience";
import LandingAbout from "../LandingAbout/LandingAbout";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <LandingAbout />
      <h2>Coding Skills</h2>
      <hr />
      <LanguageExperience />
      <hr />
      <h2>Featured Projects</h2>
      <ProjectContainer
        title="Calculator App"
        description="A simple calculator built with React."
        image={CalculatorImage}
        link="/calculator"
        codeLink="https://github.com/kyhol/Portfolio/blob/main/front-end/src/Components/Calculator/Calculator.jsx" // Blank codeLink
      />
      <ProjectContainer
        title="Weather App"
        description="A weather forecasting app using OpenWeather API."
        image={WeatherAppImage}
        link="/weather-app"
        codeLink="https://github.com/kyhol/Portfolio/blob/main/front-end/src/Components/WeatherApp/WeatherApp.jsx" // Blank codeLink
      />
      <ProjectContainer
        title="Snake Game"
        description="A classic Snake game."
        image={SnakeGameImage}
        link="/snake-game"
        codeLink="https://github.com/kyhol/Portfolio/blob/main/front-end/src/Components/SnakeGame/SnakeGame.jsx" // Blank codeLink
      />
      <ProjectContainer
        title="Text-to-Speech Converter"
        description="Convert text to speech using the Web Speech API."
        image={TextToSpeechImage}
        link="/text-to-speech"
        codeLink="https://github.com/kyhol/Portfolio/tree/main/front-end/src/Components/TextToSpeech" // Blank codeLink
      />
    </div>
  );
};

export default LandingPage;
