/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CheckCircle } from '../utilities/assets/check_circle_icon.svg';
import { ReactComponent as UncheckCircle } from '../utilities/assets/uncheck_circle_icon.svg';
import { ReactComponent as MenuIcon } from '../utilities/assets/hamburger_menu_icon.svg';

function Task({
  title, isCompleted, onComplete, openDetails,
}) {
  return (
    <>
      <TaskContainer>
        {isCompleted ? (
          <CheckCircle fill="#1BBC9B" onClick={onComplete} />
        ) : (
          <UncheckCircle fill="#128069" onClick={onComplete} />
        )}
        <Title isCompleted={isCompleted}>{title}</Title>
        <StyledMenuIcon onClick={openDetails} />
      </TaskContainer>
    </>
  );
}

const TaskContainer = styled.div`
  background-color: #2D3E50;
  opacity: 90%;
  border-radius: 20px;
  margin: 25px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 4px 4px 4px 0px #00000040;
  svg{
    width: 32px;
    height: 32px;
    margin 0px 25px 0px 15px;
    cursor: pointer;
  }
`;

const StyledMenuIcon = styled(MenuIcon)`
  fill: #128069;
  position: absolute;
  right: 0;
`;

const Title = styled.h3`
  color: #FFFFFF;
  ${(props) => (props.isCompleted ? 'text-decoration: line-through;' : '')};
`;

export default Task;
