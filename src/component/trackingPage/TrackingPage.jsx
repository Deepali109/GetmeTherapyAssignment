import React, { useState, useEffect } from "react";
import Clock from "./Clock";
import SpeedSlider from "./SpeedSlider";
import ShareButton from "./ShareButton";
import RandomQuote from "./RandomQuote";
import "./TrackingPage.css";

const TrackingPage = () => {
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const speedParam = urlParams.get("speed");
    if (speedParam) {
      setSpeed(Number(speedParam));
    }
  }, []);

  return (
    <div className="tracking-page">
      <div className="clock-container">
        <Clock speed={speed} />
      </div>
      <div className="controls">
        <SpeedSlider speed={speed} setSpeed={setSpeed} />
        <ShareButton speed={speed} />
      </div>
      <RandomQuote />
    </div>
  );
};

export default TrackingPage;
