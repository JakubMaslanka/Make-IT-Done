import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { TaskListContainer, TaskListPosition } from './TaskManager.styles';
import { SkeletonLoader } from '../../../utils/Loaders';
import { SearchBar } from '../SearchBar';
import { NoTasksContainer } from '../NoTasksContainer';
import { TaskItem } from '../TaskItem';
import { CompletedTasksList } from '../CompletedTasksList';
import { TasksCreator } from '../TasksCreator';
import { useTasks, useSoundEffect } from '../../../hooks';

export function TaskManager({ height, isAllTaskView }) {
  const {
    tasks,
    isContentLoading,
    handleTaskReload,
    handleTaskCreate,
    handleTaskEdit,
  } = useTasks();
  const [playSound] = useSoundEffect();

  const homePageTasks = tasks.filter((t) => t.isFavorite || t.deadline === moment().format('M/D/YYYY'));
  const filteredTasks = isAllTaskView ? {
    completed: tasks.filter((t) => t.isCompleted),
    uncompleted: tasks.filter((t) => !t.isCompleted),
  } : {
    completed: homePageTasks.filter((t) => t.isCompleted),
    uncompleted: homePageTasks.filter((t) => !t.isCompleted),
  };

  const [openDropdown, setOpenDropdown] = useState(false);
  const toggleDropdown = () => setOpenDropdown((prevState) => !prevState);

  useEffect(() => () => {
    handleTaskReload();
  }, []);

  return (
    <TaskListPosition>
      {isAllTaskView && <SearchBar />}
      <TaskListContainer heightIncrease={height}>
        {isContentLoading && <SkeletonLoader />}
        {isAllTaskView ? (
          !isContentLoading
          && tasks.length === 0
          && <NoTasksContainer allTaskView={isAllTaskView} />
        ) : (
          !isContentLoading
          && homePageTasks.length === 0
          && <NoTasksContainer allTaskView={isAllTaskView} />
        )}
        {filteredTasks.uncompleted.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onComplete={() => {
              playSound(!task.isCompleted);
              setOpenDropdown(true);
              handleTaskEdit(task.id, { ...task, isCompleted: !task.isCompleted });
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
      <TasksCreator
        onCreate={
          (taskToCreate) => handleTaskCreate(
            !isAllTaskView
              ? { ...taskToCreate, isFavorite: true }
              : taskToCreate,
          )
        }
      />
    </TaskListPosition>
  );
}

TaskManager.propTypes = {
  height: PropTypes.number,
  isAllTaskView: PropTypes.bool,
};

TaskManager.defaultProps = {
  height: 680,
  isAllTaskView: false,
};
