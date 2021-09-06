import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as ArrowUp } from '../../utilities/assets/arrow_up_icon.svg';
import { ReactComponent as ArrowDrop } from '../../utilities/assets/arrow_down_icon.svg';

import {
  SettingsContainer,
  InputsContainer,
  Input,
} from './CountdownSettings.styles';

export function CountdownSettings({ updateRounds, currentRound }) {
  const [newRounds, setNewRounds] = useState(currentRound);

  const handleChange = (input) => {
    const { name, value } = input.target;
    switch (name) {
      case 'work':
        setNewRounds({
          ...newRounds,
          work: parseInt(value, 10),
        });
        break;
      case 'shortBreak':
        setNewRounds({
          ...newRounds,
          short: parseInt(value, 10),
        });
        break;
      case 'longBreak':
        setNewRounds({
          ...newRounds,
          long: parseInt(value, 10),
        });
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateRounds(newRounds);
  };
  return (
    <SettingsContainer>
      <form onSubmit={handleSubmit}>
        <InputsContainer>
          <InputComp timerName="work" header="Work" timerValue={newRounds.work} handleChange={handleChange} />
          <InputComp timerName="shortBreak" header="Short Break" timerValue={newRounds.short} handleChange={handleChange} />
          <InputComp timerName="longBreak" header="Long Break" timerValue={newRounds.long} handleChange={handleChange} />
        </InputsContainer>
        <button type="submit">Set Timer</button>
      </form>
    </SettingsContainer>
  );
}

CountdownSettings.propTypes = {
  updateRounds: PropTypes.func.isRequired,
  currentRound: PropTypes.shape({
    active: PropTypes.string,
    work: PropTypes.number,
    short: PropTypes.number,
    long: PropTypes.number,
  }).isRequired,
};

const InputComp = ({
  timerName, handleChange, timerValue, header,
}) => (
  <Input>
    <p>{header}</p>
    <ArrowUp onClick={() => handleChange({
      target: {
        name: timerName,
        value: parseInt(timerValue + 1, 10),
      },
    })}
    />
    <input type="number" name={timerName} onChange={handleChange} value={timerValue} />
    <ArrowDrop onClick={() => handleChange({
      target: {
        name: timerName,
        value: parseInt(timerValue - 1, 10),
      },
    })}
    />
  </Input>
);

InputComp.propTypes = {
  handleChange: PropTypes.func.isRequired,
  timerName: PropTypes.string.isRequired,
  timerValue: PropTypes.number.isRequired,
  header: PropTypes.string.isRequired,
};
