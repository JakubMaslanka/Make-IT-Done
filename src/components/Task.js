/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

function Task({
  title, isCompleted, onComplete, openDetails,
}) {
  return (
    <>
      <TaskWraper>
        {isCompleted ? (
          <CheckCircle onClick={onComplete} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </CheckCircle>
        ) : (
          <UnCheckCircle onClick={onComplete} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z" />
          </UnCheckCircle>
        )}
        <Title isCompleted={isCompleted}>{title}</Title>
        <MenuIcon onClick={openDetails} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
        </MenuIcon>
      </TaskWraper>
    </>
  );
}

const TaskWraper = styled.div`
  background-color: #2D3E50;
  opacity: 90%;
  border-radius: 20px;
  margin: 25px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 4px 4px 4px 0px #00000040;
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

const Title = styled.h3`
  color: #FFFFFF;
  ${(props) => (props.isCompleted ? 'text-decoration: line-through;' : '')};
`;

const MenuIcon = styled.svg`
  fill: #128069;
  width: 32px;
  height: 32px;
  position: absolute;
  right: 0;
  margin: 0px 25px;
`;

export default Task;
