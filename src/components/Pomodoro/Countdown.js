import React, { useRef, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const renderTime = ({ remainingTime }) => {
  const currentTime = useRef(remainingTime);
  const prevTime = useRef(null);
  const isNewTimeFirstTick = useRef(false);
  const [, setOneLastRerender] = useState(0);

  if (currentTime.current !== remainingTime) {
    isNewTimeFirstTick.current = true;
    prevTime.current = currentTime.current;
    currentTime.current = remainingTime;
  } else {
    isNewTimeFirstTick.current = false;
  }

  if (remainingTime === 0) {
    setTimeout(() => {
      setOneLastRerender((val) => val + 1);
    }, 20);
  }

  const isTimeUp = isNewTimeFirstTick.current;

  return (
    <div className="time-wrapper">
      <div key={remainingTime} className={`time ${isTimeUp ? 'up' : ''}`}>
        {remainingTime}
      </div>
      {prevTime.current !== null && (
      <div
        key={prevTime.current}
        className={`time ${!isTimeUp ? 'down' : ''}`}
      >
        {prevTime.current}
      </div>
      )}
    </div>
  );
};

function Countdown() {
  return (
    <div className="Countdown">
      <CountdownCircleTimer
        isPlaying
        duration={10}
        colors={[['#E64C66', 0.33], ['#BE4358', 0.33], ['#842333']]}
        trailColor="#3F5873"
        strokeWidth={14}
        strokeLinecap={1}
        onComplete={() => [true, 1000]}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
}

export default Countdown;
