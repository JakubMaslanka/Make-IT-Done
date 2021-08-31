/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TasksContext } from '../context/TasksContext';
import SearchBar from './SearchBar';
import TaskItem from './TaskItem';
import CompletedTasksList from './CompletedTasksList';
import TasksCreator from './TasksCreator';

function TaskManager({ height, withSearchBar }) {
  const {
    tasks,
    addTask,
    editTask,
  } = useContext(TasksContext);
  const [openDropdown, setOpenDropdown] = useState(false);
  const uncompletedTasks = tasks.filter((t) => !t.isCompleted);
  const completedTasks = tasks.filter((t) => t.isCompleted);
  const toggleDropdown = () => setOpenDropdown((prevState) => !prevState);
  return (
    <>
      {withSearchBar && <SearchBar />}
      <TaskListContainer heightIncrease={height}>
        {uncompletedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onComplete={() => {
              editTask(task.id, { ...task, isCompleted: !task.isCompleted });
              setOpenDropdown(true);
            }}
            onFavorite={() => editTask(task.id, { ...task, isFavorite: !task.isFavorite })}
          />
        ))}
        {completedTasks.length !== 0 && (
          <CompletedTasksList
            toggleDropdown={toggleDropdown}
            isDropdownOpen={openDropdown}
            completedTasks={completedTasks}
            editTask={editTask}
          />
        )}
      </TaskListContainer>
      <TasksCreator onCreate={(taskToCreat) => addTask(taskToCreat)} />
    </>
  );
}

const TaskListContainer = styled.div`
    ${(props) => `height: ${props.heightIncrease}px`};
    overflow-y: scroll;
`;

export default TaskManager;
