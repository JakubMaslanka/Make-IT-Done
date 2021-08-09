/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const PomodoroTasks = ({
  setTitle, tasks, activeTask, setActiveTask,
}) => (
  <Container>
    {tasks.map((task) => (
      task.pomodoro && (
      <Title
        onClick={() => {
          setActiveTask(task);
          setTitle(task.title);
        }}
        key={task.id}
        activeTaskBorder={task === activeTask}
      >
        <div className="taskContainer">
          <h3>{task.title}</h3>
          <span>{task.pomodoro.done}</span>
          <span>/</span>
          <span>{task.pomodoro.est}</span>
        </div>
      </Title>
      )
    ))}
  </Container>
);

const Container = styled.div`
    max-width: 480px;
    margin: 20px auto;
`;

const Title = styled.div`
background-color: #2D3E50;
padding: 10px;
width: 480px;
border-radius: 4px;
cursor: pointer;
margin-top: 8px;
text-align: left;
font-size: 16px;
color: white;
${(props) => (props.activeTaskBorder ? 'border-left: 6px solid #FE4D4C;' : '')};
.taskContainer{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
}
h3{
    font-weight: bold;
    width: 90%;
    line-height: 1.5em;
}
`;

export default PomodoroTasks;
