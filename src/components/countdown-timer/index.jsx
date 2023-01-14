import React, { useEffect, useState } from "react";
import "./index.scss";
const CountdownTimer = () => {
  const [countdownDate, setCountdownDate] = useState(
    new Date("12/25/2024").getTime()
  );
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setState({ days: days, hours: hours, minutes, seconds });
    }
  };
  return (
    <div>
      <div className="countdownContainer">
        <div className="countdown-wrapper">
          <div className="content">
            <h3>Pay less, stay in fashion!</h3>
          </div>
          <div className="timer">
            <div className="time-section">
              <div className="time">
                <span>{state.days || "0"}</span>
              </div>
              <div className="timeComponent">DAYS</div>
            </div>

            <div className="time-section">
              <div className="time">
                <span>{state.hours || "00"}</span>
              </div>
              <div className="timeComponent">HOURS</div>
            </div>

            <div className="time-section">
              <div className="time">
                <span>{state.minutes || "00"}</span>
              </div>
              <div className="timeComponent">MINS</div>
            </div>

            <div className="time-section">
              <div className="time">
                <span>{state.seconds || "00"}</span>
              </div>
              <div className="timeComponent">
                <span>SECS</span>
              </div>
            </div>
          </div>
          <div className="shopNowBtn">
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
