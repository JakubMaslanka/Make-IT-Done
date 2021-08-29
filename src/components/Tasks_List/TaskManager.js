<<<<<<< HEAD
import React, { useContext } from 'react';
import TasksCreator from './Tasks_Creator/TasksCreator';
import TaskItem from './TaskItem';

=======
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import styled from 'styled-components';
import TasksCreator from './Tasks_Creator/TasksCreator';
import TaskItem from './TaskItem';
>>>>>>> feature
import { TasksContext } from '../context/TasksContext';

function TaskManager({ height }) {
  const {
    tasks,
    addTask,
    editTask,
  } = useContext(TasksContext);
<<<<<<< HEAD

  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onComplete={() => editTask(task.id, { ...task, isCompleted: !task.isCompleted })}
          onFavorite={() => editTask(task.id, { ...task, isFavorite: !task.isFavorite })}
        />
      ))}
=======
  return (
    <>
      <TaskListContainer heightIncrease={height}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onComplete={() => editTask(task.id, { ...task, isCompleted: !task.isCompleted })}
            onFavorite={() => editTask(task.id, { ...task, isFavorite: !task.isFavorite })}
          />
        ))}
      </TaskListContainer>
>>>>>>> feature
      <TasksCreator onCreate={(taskToCreat) => addTask(taskToCreat)} />
    </>
  );
}

const TaskListContainer = styled.div`
    ${(props) => `height: ${props.heightIncrease}px`};
    overflow-y: scroll;
`;

export default TaskManager;
