/* eslint-disable react/prop-types */
import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const CountdownTimer = ({
  active, uniqueKey, timer, animate, stopAimate,
}) => {
  const setColors = (activeTimer) => {
    switch (activeTimer) {
      case 'work':
        return [
          ['#FE4D4C', 0.33],
          ['#CB3D3C', 0.33],
          ['#7E2625', 0.33],
        ];
      case 'short':
        return [
          ['#1BBC9B', 0.33],
          ['#179C81', 0.33],
          ['#117661', 0.33],
        ];
      case 'long':
        return [
          ['#28D1F8', 0.33],
          ['#1C91AC', 0.33],
          ['#0F505F', 0.33],
        ];
      default:
        return [
          ['#E64C66', 0.33],
          ['#B93A4F', 0.33],
          ['#0F505F', 0.33],
        ];
    }
  };

  return (

    <CountdownCircleTimer
      key={uniqueKey}
      isPlaying={animate}
      duration={timer * 60}
      colors={setColors(active)}
      strokeWidth={6}
      size={220}
      trailColor="#151932"
      onComplete={() => {
        stopAimate();
      }}
    >
      {({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        return (`${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`);
      }}
    </CountdownCircleTimer>
  );
};

export default CountdownTimer;
