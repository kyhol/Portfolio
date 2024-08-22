import React, { useState, useEffect } from "react";
import "./TextToSpeech.css";
import Button from "../ReturnToPortfolioButton/ReturnToPortfolioButton";

const TextToSpeech = () => {
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(0);
  const [text, setText] = useState("");
  const [speech] = useState(new SpeechSynthesisUtterance());

  useEffect(() => {
    const handleVoicesChanged = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      if (availableVoices.length > 0) {
        speech.voice = availableVoices[0];
      }
    };

    window.speechSynthesis.onvoiceschanged = handleVoicesChanged;
    handleVoicesChanged(); // Initial call to populate voices

    return () => {
      window.speechSynthesis.onvoiceschanged = null; // Clean up the event listener
    };
  }, [speech]);

  useEffect(() => {
    speech.voice = voices[selectedVoice] || null;
  }, [selectedVoice, voices, speech]);

  const handleVoiceChange = (event) => {
    setSelectedVoice(parseInt(event.target.value, 10));
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleListenClick = () => {
    speech.text = text;
    window.speechSynthesis.speak(speech);
  };

  return (
    <div>
      <Button className="returnToPortfolioButton" />
      <div className="hero">
        <h1>
          Text to Speech <span>Converter</span>
        </h1>
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Type what you want to listen to here..."
        />
        <div className="row">
          <select
            value={selectedVoice}
            onChange={handleVoiceChange}
            className="selectVoice"
          >
            {voices.map((voice, i) => (
              <option key={i} value={i}>
                {voice.name}
              </option>
            ))}
          </select>
          <button onClick={handleListenClick}>Listen</button>
        </div>
      </div>
    </div>
  );
};

export default TextToSpeech;
