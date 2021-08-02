import React from 'react';
import Settings from '../components/Pomodoro/Settings';
import Countdown from '../components/Pomodoro/Countdown';

const Pomodoro = () => (
  <div>
    <h1>Pomodoro</h1>
    <small>Be more productive!</small>
    <Settings />
    <Countdown />
  </div>
);

export default Pomodoro;
