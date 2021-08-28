/* eslint-disable no-alert */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import moment from 'moment';
import Calendar from 'react-calendar';
import DropdownCalendarMenu from './Tasks_Creator/DropdownCalendarMenu';
import DropdownPomodoroMenu from './Tasks_Creator/DropdownPomodoroMenu';
import DropdownRepeatMenu from './Tasks_Creator/DropdownRepeatMenu';
import { ReactComponent as CheckCircle } from '../utilities/assets/check_circle_icon.svg';
import { ReactComponent as UncheckCircle } from '../utilities/assets/uncheck_circle_icon.svg';
import { ReactComponent as UncheckStarIcon } from '../utilities/assets/uncheck_star_icon.svg';
import { ReactComponent as CheckStarIcon } from '../utilities/assets/check_star_icon.svg';
import { ReactComponent as TrashIcon } from '../utilities/assets/trash_icon.svg';
import { ReactComponent as ArrowRight } from '../utilities/assets/arrow_right_icon.svg';
import { ReactComponent as DataPickUpIcon } from '../utilities/assets/data_pickup_icon.svg';
import { ReactComponent as PomodoroClockIcon } from '../utilities/assets/pomodoro_clock_icon.svg';
import { ReactComponent as RepeatCountIcon } from '../utilities/assets/repeat_count_icon.svg';

import useClickOutsideHook from '../utilities/useClickOutsideHook';

function TaskEditor({
  taskToEdit, onEdit, onClose, onDelete,
}) {
  const [newTitle, setNewTitle] = useState(taskToEdit.title);
  const [date, setDate] = useState(taskToEdit.deadline || null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [taskDescription, setTaskDescription] = useState(taskToEdit.description || '');

  const handleTitleEdit = () => onEdit(taskToEdit.id, { ...taskToEdit, title: newTitle });
  const handleCompleted = () => onEdit(taskToEdit.id, { ...taskToEdit, isCompleted: !taskToEdit.isCompleted });
  const handleFavoriteMark = () => onEdit(taskToEdit.id, { ...taskToEdit, isFavorite: !taskToEdit.isFavorite });
  const handleDescriptionEdit = () => onEdit(taskToEdit.id, { ...taskToEdit, description: taskDescription });
  const handleDelete = () => (window.confirm('Are you sure you want to delete this task?') ? onDelete() : null);
  const handleDateEdit = (pickedDate) => {
    if (date !== pickedDate) {
      onEdit(taskToEdit.id, { ...taskToEdit, deadline: pickedDate ? moment(pickedDate).format('M/D/YYYY') : null });
      setCalendarOpen(false);
    }
  };
  const handlePomodorosEdit = (pickedPomodoros) => {
    if (taskToEdit.pomodoro) {
      onEdit(taskToEdit.id, {
        ...taskToEdit,
        pomodoro: pickedPomodoros === null ? null : { est: pickedPomodoros, done: taskToEdit.pomodoro.done },
      });
    } else {
      onEdit(taskToEdit.id, {
        ...taskToEdit,
        pomodoro: {
          est: pickedPomodoros,
          done: 0,
        },
      });
    }
  };

  const domNode = useClickOutsideHook(onClose);

  return (
    <>
      <EditorContainer ref={domNode}>
        <div className="headerContainer">
          {taskToEdit.isCompleted ? (
            <CheckCircle fill="#1BBC9B" onClick={handleCompleted} />
          ) : (
            <UncheckCircle fill="#128069" onClick={handleCompleted} />
          )}
          <input onBlur={handleTitleEdit} onChange={(e) => setNewTitle(e.target.value)} value={newTitle} type="text" />
          {taskToEdit.isFavorite ? (
            <CheckStarIcon fill="#1BBC9B" onClick={handleFavoriteMark} />
          ) : (
            <UncheckStarIcon fill="#128069" onClick={handleFavoriteMark} />
          )}
        </div>
        {calendarOpen && (
        <DatePicker
          onClickDay={handleDateEdit}
          onChange={setDate}
          value={new Date() || date}
          locale="en-EN"
        />
        )}
        <DropdownCalendarMenu
          editorStyle
          deadline={taskToEdit.deadline}
          onDatePick={handleDateEdit}
          isOpen={(state) => setCalendarOpen(state)}
          icon={<DataPickUpIcon fill="#128069" />}
          label={taskToEdit.deadline ? moment(taskToEdit.deadline).format('ddd, D MMMM') : 'Add deadline'}
        />
        <DropdownPomodoroMenu
          editorStyle
          onPomodorosPick={handlePomodorosEdit}
          isPomodoroSet={taskToEdit.pomodoro}
          icon={<PomodoroClockIcon fill="#128069" />}
          label={taskToEdit.pomodoro ? `${taskToEdit.pomodoro.est} Pomodoros` : 'Set Pomodoros'}
        />
        <DropdownRepeatMenu
          editorStyle
          icon={<RepeatCountIcon fill="#128069" />}
          label="Set Repeats"
        />
        <textarea maxLength="150" onBlur={handleDescriptionEdit} onChange={(e) => setTaskDescription(e.target.value)} value={taskDescription} type="text" placeholder="Add a note" />
        <div className="footerContainer">
          <ArrowRight fill="#128069" onClick={onClose} />
          <p>{`Created on ${moment(taskToEdit.timeStump).format('ddd., D MMM YYYY')}`}</p>
          <TrashIcon fill="#128069" onClick={handleDelete} />
        </div>
      </EditorContainer>
      <GreyedOutBackground />
    </>
  );
}

const slideInAnimation = keyframes`
  0% {
    transform: translateX(100%)
  }
  100% {
    transform: translateX(0%)
  }
`;

const DatePicker = styled(Calendar)`
  position: absolute;
  border-radius: 2%;
`;

const EditorContainer = styled.div`
  position: fixed;
  background: #2D3E50;
  top: 0;
  right: 0;
  box-shadow: -15px 0px 25px 0px rgba(0,0,0,.5);
  height: 100%;
  z-index: 10;
  overflow-x: hidden;
  padding: 50px 20px 0px 20px;
  transition: 0.5s;
  animation: ${slideInAnimation} .5s;
  display: flex;
  flex-direction: column;
  .headerContainer{
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 80px;
    background-color: #3F5873;
    padding: 10px;
    border-radius: 10px;
    border-bottom: .3px solid rgba(255,255,255, .3);
      input {
        border: none;
        background: none;
        outline: none;
        font-size: 18px;
        font-weight: 600;
        color: white;
      }
      svg{
        width: 30px;
        height: 30px;
        margin 0px 5px;
        cursor: pointer;
        &:hover{
          transition: all 0.2s ease;
          fill: #1BBC9B;
      }
    }
  }
  textarea{
    height: 100px;
    outline: none;
    border: none;
    background: rgba(63, 88, 115, 1);
    padding: 10px;
    border-radius: 10px;
    color: white;
    font-size: 16px;
    resize: none;
    ::placeholder {
      color: white;
      font-size: 1em;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    }
  }
  .footerContainer{
    position: absolute;
    bottom: 54px;
    width: 342px;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    color: white;
    font-weight: 400;
    border-top: .3px solid rgba(255,255,255, .3);
    p{
      opacity: 80%;
    }
    svg{
      width: 30px;
      height: 30px;
      cursor: pointer;
      &:hover{
        transition: fill 0.2s ease;
        fill: #1BBC9B;
    }
    }
`;

const GreyedOutBackground = styled.div`
      top: 0px;
      left: 0px;
      z-index: 1;
      width: 100vw;
      height: 100vh;
      position: absolute;
      background-color: rgba(0,0,0,0.6);`;

export default TaskEditor;
