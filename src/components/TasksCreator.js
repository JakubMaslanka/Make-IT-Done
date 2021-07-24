/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';
import { ReactComponent as PublishIcon } from '../utilities/assets/submit_icon.svg';
import { ReactComponent as DataPickUpIcon } from '../utilities/assets/data_pickup_icon.svg';
import { ReactComponent as PomodoroClockIcon } from '../utilities/assets/pomodoro_clock_icon.svg';
import { ReactComponent as RepeatCountIcon } from '../utilities/assets/repeat_count_icon.svg';

function TasksCreator({ onCreate }) {
  const tasksTitle = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({
      id: new Date().getMilliseconds(),
      title: tasksTitle.current.value,
      timeStump: new Date(),
    });
    tasksTitle.current.value = '';
  };

  return (
    <TaskCreatorContainer>
      <FormContainer onSubmit={handleSubmit}>
        <SubmitButton type="submit">
          <PublishIcon />
        </SubmitButton>
        <TextInput required placeholder="Add new task" type="text" ref={tasksTitle} />
        <TaskOptions>
          <DropdownMenu icon={<DataPickUpIcon />}>
            <MenuItem>Today</MenuItem>
            <MenuItem>Tommorow</MenuItem>
            <MenuItem>Next Week</MenuItem>
            <hr size="1" />
            <MenuItem>Pickup the data</MenuItem>
          </DropdownMenu>
          <DropdownMenu icon={<PomodoroClockIcon />} />
          <DropdownMenu icon={<RepeatCountIcon />} />
        </TaskOptions>
      </FormContainer>
    </TaskCreatorContainer>
  );
}

const MenuItem = styled.li`
    height: 30px;
    display: flex;
    align-items: center;
    transition: background 0.5;
    padding: .8rem;
    &:hover{
      background: #EFEFEF;
    }
`;

const TaskOptions = styled.div`
  list-style: none;
  height: 100%;
  display: flex;
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

export default TasksCreator;
