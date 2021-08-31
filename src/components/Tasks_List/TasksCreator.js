/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DropdownCalendarMenu from './Dropdown_Menus/DropdownCalendarMenu';
import DropdownPomodoroMenu from './Dropdown_Menus/DropdownPomodoroMenu';
import DropdownRepeatMenu from './Dropdown_Menus/DropdownRepeatMenu';

import { ReactComponent as PublishIcon } from '../utilities/assets/submit_icon.svg';
import { ReactComponent as DataPickUpIcon } from '../utilities/assets/data_pickup_icon.svg';
import { ReactComponent as PomodoroClockIcon } from '../utilities/assets/pomodoro_clock_icon.svg';
import { ReactComponent as RepeatCountIcon } from '../utilities/assets/repeat_count_icon.svg';

import useClickOutsideHook from '../utilities/useClickOutsideHook';

function TasksCreator({ onCreate }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(null);
  const [pomodoroEst, setPomodoroEst] = useState(null);
  const [isCalendarOpen, onCalendarOpen] = useState(false);

  const handleTaskCreate = (e) => {
    e.preventDefault();
    onCreate({
      id: new Date().getMilliseconds(),
      title,
      isCompleted: false,
      isFavorite: false,
      deadline: date ? moment(date).format('M/D/YYYY') : null,
      pomodoro: pomodoroEst ? {
        est: pomodoroEst,
        done: 0,
      } : null,
      timeStump: moment().format(),
    });
    setTitle('');
    setDate(null);
    setPomodoroEst(null);
  };

  const handleDateSubmit = (pickedDate) => {
    if (pickedDate !== date) {
      setDate(pickedDate);
      onCalendarOpen(false);
    }
  };

  const handlePomodorosSubmit = (pickedPomodoros) => {
    setPomodoroEst(pickedPomodoros);
  };

  const domNode = useClickOutsideHook(() => onCalendarOpen(false));

  return (

    <CreatorContainer>
      <div ref={domNode}>
        {isCalendarOpen && (
        <DatePicker
          onClickDay={handleDateSubmit}
          onChange={setDate}
          value={new Date() || date}
          locale="en-EN"
        />
        )}
      </div>
      <FormContainer onSubmit={handleTaskCreate}>
        <SubmitButton type="submit">
          <PublishIcon />
        </SubmitButton>
        <TextInput required placeholder="Add new task" type="text" onChange={(e) => setTitle(e.target.value)} />
        <TaskOptions>
          <DropdownCalendarMenu
            onDatePick={handleDateSubmit}
            isOpen={(state) => onCalendarOpen(state)}
            icon={<DataPickUpIcon />}
            deadline={date}
            label={date ? moment(date).format('ddd, D MMMM') : null}
          />
          <DropdownPomodoroMenu
            icon={<PomodoroClockIcon />}
            onPomodorosPick={handlePomodorosSubmit}
            isPomodoroSet={pomodoroEst}
            label={pomodoroEst ? `${pomodoroEst} Pomodoros` : null}
          />
          <DropdownRepeatMenu icon={<RepeatCountIcon />} />
        </TaskOptions>
      </FormContainer>
    </CreatorContainer>
  );
}

const DatePicker = styled(Calendar)`
  position: absolute;
  top: -270px;
  right: 0;
  border-radius: 2%;
`;

const TaskOptions = styled.div`
  list-style: none;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  svg{
    padding: 0px 10px;
    fill: #128069;
    width: 28px;
    height: 28px;
    cursor: pointer;
    &:hover{
      transition: all 0.2s ease;
      fill: #1BBC9B;
  }
`;

const TextInput = styled.input`
  background: none;
  border: none;
  padding: 10px;
  outline: none;
  color: white;
  font-size: 1.2rem;
  width: 100%;
`;

const SubmitButton = styled.button`
  background: none;
  border: none;
  padding: 10px;
  svg {
    fill: #128069;
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
  &:hover{
    transition: all 0.2s ease;
    svg{
      fill: #1BBC9B;
    }
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #2D3E50;
  border-radius: 10px;
`;

const CreatorContainer = styled.div`
  position: fixed;
  bottom: 0;
  margin: 0px 10px 75px 10px;
  width: calc(100% - 20px);
`;

export default TasksCreator;
