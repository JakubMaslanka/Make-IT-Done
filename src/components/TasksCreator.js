/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DropdownCalendarMenu from './DropdownCalendarMenu';
import DropdownPomodoroMenu from './DropdownPomodoroMenu';
import DropdownRepeatMenu from './DropdownRepeatMenu';
import useClickOutsideHook from '../utilities/useClickOutsideHook';

import { ReactComponent as PublishIcon } from '../utilities/assets/submit_icon.svg';
import { ReactComponent as DataPickUpIcon } from '../utilities/assets/data_pickup_icon.svg';
import { ReactComponent as PomodoroClockIcon } from '../utilities/assets/pomodoro_clock_icon.svg';
import { ReactComponent as RepeatCountIcon } from '../utilities/assets/repeat_count_icon.svg';

export default function TasksCreator({ onCreate }) {
  const tasksTitle = useRef(null);

  const [pickedDate, onPickedDate] = useState(null);
  const [isCalendarOpen, onCalendarOpen] = useState(false);

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    onCreate({
      id: new Date().getMilliseconds(),
      title: tasksTitle.current.value,
      deadline: moment(pickedDate).format('ddd, D MMMM'),
      timeStump: moment().format(),
    });
    tasksTitle.current.value = '';
    onPickedDate(null);
  };

  const handleDateSubmit = (date) => {
    if (pickedDate !== date) {
      onPickedDate(date);
      onCalendarOpen(false);
    }
  };

  const handleCalendarOpen = (para) => onCalendarOpen(para);
  const domNode = useClickOutsideHook(() => onCalendarOpen(false));

  return (

    <TaskCreatorContainer>
      <div ref={domNode}>
        {isCalendarOpen && (
        <StyledCalendar
          onClickDay={handleDateSubmit}
          onChange={onPickedDate}
          value={new Date() || pickedDate}
          locale="en-EN"
        />
        )}
      </div>
      <FormContainer onSubmit={handleTaskSubmit}>
        <SubmitButton type="submit">
          <PublishIcon />
        </SubmitButton>
        <TextInput required placeholder="Add new task" type="text" ref={tasksTitle} />
        <TaskOptions>
          <DropdownCalendarMenu
            onDatePick={handleDateSubmit}
            isOpen={handleCalendarOpen}
            icon={<DataPickUpIcon />}
            label={pickedDate ? moment(pickedDate).format('ddd, D MMMM') : null}
          />
          <DropdownPomodoroMenu icon={<PomodoroClockIcon />} />
          <DropdownRepeatMenu icon={<RepeatCountIcon />} />
        </TaskOptions>
      </FormContainer>
    </TaskCreatorContainer>
  );
}

const StyledCalendar = styled(Calendar)`
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

const TaskCreatorContainer = styled.div`
  position: fixed;
  bottom: 0;
  margin: 0px 10px 75px 10px;
  width: calc(100% - 20px);
`;
