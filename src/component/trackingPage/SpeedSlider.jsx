import React from "react";
import "./SpeedSlider.css";

const SpeedSlider = ({ speed, setSpeed }) => {
  const handleChange = (e) => {
    setSpeed(Number(e.target.value));
  };

  return (
    <div className="slider-container">
      <label htmlFor="speed-slider">Speed:</label>
      <input
        type="range"
        id="speed-slider"
        min="1"
        max="10"
        value={speed}
        onChange={handleChange}
      />
      <span>{speed}x</span>
    </div>
  );
};

export default SpeedSlider;
