import React, { useEffect, useRef, useState } from "react";
import "./Clock.css";

const Clock = ({ speed }) => {
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const secondRef = useRef(null);
  const intervalRef = useRef(null);

  // Initialize the time to 12:00:00
  const [currentTime, setCurrentTime] = useState(() => {
    const now = new Date();
    now.setHours(12);
    now.setMinutes(0);
    now.setSeconds(0);
    return now;
  });

  useEffect(() => {
    const tick = () => {
      const newTime = new Date(currentTime.getTime() - 1000 * speed);
      setCurrentTime(newTime);

      const seconds = newTime.getSeconds();
      const minutes = newTime.getMinutes();
      const hours = newTime.getHours();

      secondRef.current.style.transform = `rotate(${seconds * 6}deg)`;
      minuteRef.current.style.transform = `rotate(${minutes * 6}deg)`;
      hourRef.current.style.transform = `rotate(${
        hours * 30 + minutes / 2
      }deg)`;
    };

    intervalRef.current = setInterval(tick, 1000);
    return () => clearInterval(intervalRef.current);
  }, [currentTime, speed]);

  return (
    <div className="clock-container">
      <div className="clock">
        <div className="hand hour" ref={hourRef}></div>
        <div className="hand minute" ref={minuteRef}></div>
        <div className="hand second" ref={secondRef}></div>
      </div>
    </div>
  );
};

export default Clock;
