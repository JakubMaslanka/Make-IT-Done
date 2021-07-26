/* eslint-disable react/prop-types */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as CheckCircle } from '../utilities/assets/check_circle_icon.svg';
import { ReactComponent as UncheckCircle } from '../utilities/assets/uncheck_circle_icon.svg';

const TaskDetailsMenu = ({
  id, tasks, onEdit, closeDetails, onDelete,
}) => {
  const [detailTask] = tasks.filter((task) => task.id === id);

  return (
    <SlideMenuContainer>
      {detailTask.isCompleted ? (
        <CheckCircle fill="#1BBC9B" />
      ) : (
        <UncheckCircle fill="#128069" />
      )}
      <input onChange={onEdit} value={detailTask.title} type="text" />
      <button onClick={onDelete} type="button">Delete Task</button>
      <button onClick={closeDetails} type="button">Close panel</button>
    </SlideMenuContainer>
  );
};

const slideInAnimation = keyframes`
  0% {
    width: 0%
  }
  100% {
    width: 100%
  }
`;

const SlideMenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  background: white;
  z-index: 1;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
  animation: ${slideInAnimation} .5s;
  input {
    border: none;
    font-size: 24px;
    outline: none;
    border-bottom: 1px solid black;
  }
  svg{
    width: 32px;
    height: 32px;
    margin 0px 15px;
    cursor: pointer;
  }
`;

export default TaskDetailsMenu;
