/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { ReactComponent as CheckCircle } from '../utilities/assets/check_circle_icon.svg';
import { ReactComponent as UncheckCircle } from '../utilities/assets/uncheck_circle_icon.svg';
import { ReactComponent as MoreOptionIcon } from '../utilities/assets/more_option_icon.svg';

const PomodoroTasks = ({
  setTitle, tasks, activeTaskId, setActiveTaskId,
}) => {
  const history = useHistory();
  return (
    <Container>
      {tasks.map((task) => (
        <TaskItem
          onClick={() => {
            setActiveTaskId(task.id);
            setTitle(task.title);
          }}
          key={task.id}
          activeTaskBorder={task.id === activeTaskId}
        >
          {task.isCompleted ? (
            <CheckCircle fill="#1BBC9B" />
          ) : (
            <UncheckCircle fill="#128069" />
          )}
          <TaskContainer>
            <H3 isCompleted={task.isCompleted}>{task.title}</H3>
            <span>{task.pomodoro.done}</span>
            <span>/</span>
            <span>{task.pomodoro.est}</span>
          </TaskContainer>
          <MoreOptionIcon fill="#128069" onClick={() => history.push(`${window.location.pathname}/${task.id}`)} />
        </TaskItem>

      ))}
    </Container>
  );
};

const Container = styled.div`
    max-width: 480px;
    margin: 20px auto;
`;

const TaskItem = styled.div`
    background-color: #2D3E50;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 10px;
    width: 480px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 8px;
    text-align: left;
    font-size: 16px;
    color: white;
    ${(props) => (props.activeTaskBorder ? 'border-left: 6px solid #FE4D4C;' : 'border-left: 6px solid #2D3E50;')};
    svg{
      width: 32px;
      height: 32px;
        &:hover{
          fill: #1BBC9B;
        }
    }
`;

const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const H3 = styled.h3`
  font-weight: bold;
  width: 90%;
  line-height: 1.5em;
  ${(props) => (props.isCompleted ? 'text-decoration: line-through;' : '')};
`;

export default PomodoroTasks;
