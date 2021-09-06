import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { TaskListContainer } from './TaskManager.styles';

import { TasksContext } from '../../context/TasksContext';

import { SearchBar } from '../SearchBar';
import { TaskItem } from '../TaskItem';
import { CompletedTasksList } from '../CompletedTasksList';
import { TasksCreator } from '../TasksCreator';

export function TaskManager({ height, withSearchBar }) {
  const {
    tasks,
    addTask,
    editTask,
  } = useContext(TasksContext);

  const filteredTasks = {
    completed: tasks.filter((t) => t.isCompleted),
    uncompleted: tasks.filter((t) => !t.isCompleted),
  };

  const [openDropdown, setOpenDropdown] = useState(false);
  const toggleDropdown = () => setOpenDropdown((prevState) => !prevState);
  return (
    <>
      {withSearchBar && <SearchBar />}
      <TaskListContainer heightIncrease={height}>
        {filteredTasks.uncompleted.map((task) => (
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
        {filteredTasks.completed.length !== 0 && (
          <CompletedTasksList
            toggleDropdown={toggleDropdown}
            isDropdownOpen={openDropdown}
            tasks={filteredTasks.completed}
            editTask={editTask}
          />
        )}
      </TaskListContainer>
      <TasksCreator onCreate={(taskToCreat) => addTask(taskToCreat)} />
    </>
  );
}

TaskManager.propTypes = {
  height: PropTypes.number,
  withSearchBar: PropTypes.bool,
};

TaskManager.defaultProps = {
  height: 680,
  withSearchBar: false,
};
