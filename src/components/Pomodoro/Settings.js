/* eslint-disable radix */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as ArrowUp } from '../utilities/assets/arrow_up_icon.svg';
import { ReactComponent as ArrowDrop } from '../utilities/assets/arrow_down_icon.svg';

function Settings({ updateSchedule, currentSchedule }) {
  const [newTimer, setNewTimer] = useState(currentSchedule
    || {
      work: 25,
      short: 5,
      long: 15,
      active: 'work',
    });

  const handleChange = (input) => {
    const { name, value } = input.target;
    switch (name) {
      case 'work':
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        });
        break;
      case 'shortBreak':
        setNewTimer({
          ...newTimer,
          short: parseInt(value),
        });
        break;
      case 'longBreak':
        setNewTimer({
          ...newTimer,
          long: parseInt(value),
        });
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateSchedule(newTimer);
  };
  return (
    <SettingsContainer>
      <form onSubmit={handleSubmit}>
        <InputsContainer>
          <InputComp timerName="work" header="Work" timerValue={newTimer.work} handleChange={handleChange} />
          <InputComp timerName="shortBreak" header="Short Break" timerValue={newTimer.short} handleChange={handleChange} />
          <InputComp timerName="longBreak" header="Long Break" timerValue={newTimer.long} handleChange={handleChange} />
        </InputsContainer>
        <button type="submit">Set Timer</button>
      </form>
    </SettingsContainer>
  );
}

const InputComp = ({
  timerName, handleChange, timerValue, header,
}) => (
  <Input>
    <p>{header}</p>
    <ArrowUp onClick={() => handleChange({
      target: {
        name: timerName,
        value: parseInt(timerValue + 1),
      },
    })}
    />
    <input type="number" name={timerName} onChange={handleChange} value={timerValue} />
    <ArrowDrop onClick={() => handleChange({
      target: {
        name: timerName,
        value: parseInt(timerValue - 1),
      },
    })}
    />
  </Input>
);

const SettingsContainer = styled.div`
  text-align: center;
  margin: 16px;
  margin-bottm: 0px;
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  button {
    color:#efefef;
    font-size: 14px;
    padding: 8px 24px;
    border: none;
    border-radius: 42px;
    background: #128069;
    min-width: 80px;
    cursor: pointer;
  }
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  p{
    font-weight: 500;
    letter-spacing: 0.1em;
    text-align: center;
    color: #1BBC9B;
    margin: 0px;
  }
  input{
    height: 30px;
    width: 30px;
    padding: 24px;
    text-align: center;
    font-size: 18px;
    border: none;
    border-radius: 8px;
    background-color: #3F5873;
    color: white;
    outline: none;
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  svg{
    width: 32px;
    height: 32px;
    fill: #ffffff;
    cursor: pointer;
  }
`;

export default Settings;
