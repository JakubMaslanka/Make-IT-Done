/* eslint-disable react/prop-types */
import React from 'react';
import styled, { keyframes } from 'styled-components';

const TaskDetailsMenu = ({
  id, tasks, onEdit, closeDetails, onDelete,
}) => {
  const [detailTask] = tasks.filter((task) => task.id === id);

  return (
    <SlideMenu>
      {detailTask.isCompleted ? (
        <CheckCircle xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </CheckCircle>
      ) : (
        <UnCheckCircle xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
        </UnCheckCircle>
      )}
      <input onChange={onEdit} value={detailTask.title} type="text" />
      <button onClick={onDelete} type="button">Delete Task</button>
      <button onClick={closeDetails} type="button">Close panel</button>
    </SlideMenu>
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

const UnCheckCircle = styled.svg`
  fill: #128069;
  width: 32px;
  height: 32px;
  margin 0px 15px;
`;

const CheckCircle = styled.svg`
  fill: #1BBC9B;
  width: 32px;
  height: 32px;
  margin 0px 15px;
`;

const SlideMenu = styled.div`
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
`;

export default TaskDetailsMenu;
