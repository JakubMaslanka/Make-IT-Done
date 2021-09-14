import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TaskListContainer } from './TaskManager.styles';
import { SkeletonLoader } from '../../../utils/Loaders';
import { SearchBar } from '../SearchBar';
import { TaskItem } from '../TaskItem';
import { CompletedTasksList } from '../CompletedTasksList';
import { TasksCreator } from '../TasksCreator';
import { useTasks } from '../../../hooks';

export function TaskManager({ height, withSearchBar }) {
  const {
    tasks,
    isContentLoading,
    handleTaskCreate,
    handleTaskEdit,
  } = useTasks();

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
        {isContentLoading && <SkeletonLoader />}
        {filteredTasks.uncompleted.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onComplete={() => {
              handleTaskEdit(task.id, { ...task, isCompleted: !task.isCompleted });
              setOpenDropdown(true);
            }}
            onFavorite={() => handleTaskEdit(task.id, { ...task, isFavorite: !task.isFavorite })}
          />
        ))}
        {filteredTasks.completed.length !== 0 && (
          <CompletedTasksList
            toggleDropdown={toggleDropdown}
            isDropdownOpen={openDropdown}
            tasks={filteredTasks.completed}
            editTask={handleTaskEdit}
          />
        )}
      </TaskListContainer>
      <TasksCreator onCreate={(taskToCreate) => handleTaskCreate(taskToCreate)} />
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
