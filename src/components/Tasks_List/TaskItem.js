/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { ReactComponent as CheckCircle } from '../utilities/assets/check_circle_icon.svg';
import { ReactComponent as UncheckCircle } from '../utilities/assets/uncheck_circle_icon.svg';
import { ReactComponent as SmallCalendar } from '../utilities/assets/calendar_icon.svg';
import { ReactComponent as MenuIcon } from '../utilities/assets/hamburger_menu_icon.svg';

export default function TaskItem({
  title, isCompleted, onComplete, openDetails, deadline,
}) {
  return (
    <>
      <TaskContainer>
        {isCompleted ? (
          <CheckCircle fill="#1BBC9B" onClick={onComplete} />
        ) : (
          <UncheckCircle fill="#128069" onClick={onComplete} />
        )}
        <Title isCompleted={isCompleted} isDateSet={deadline}>
          <h3>{title}</h3>
          {deadline && (
            <p>
              <SmallCalendar />
              {moment(deadline).format('ddd, D MMMM')}
            </p>
          )}
        </Title>
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

const Title = styled.div`
  h3{
    margin: 7.5px 0px;
    font-size: 1.28rem;
    color: #FFFFFF;
    ${(props) => (props.isCompleted ? 'text-decoration: line-through;' : '')};
  }
  ${(props) => (props.isDateSet ? (`
    h3{
      margin: 10px 0px 0px 0px;
    }
    p{
      display: flex;
      flex-direction: row;
      margin: 0px 0px 10px 0px;
      font-size: .85rem;
      color: #AFAFAF;
      svg {
        margin: 2px 5px 0px 0px;
        width: 14px;
        height: 14px;
        fill: #AFAFAF;
      }
    }
  `) : 'margin: 10px 0px;')}`;
