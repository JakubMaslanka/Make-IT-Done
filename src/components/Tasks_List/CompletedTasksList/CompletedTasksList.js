import React from 'react';
import PropTypes from 'prop-types';
import { TaskItem } from '../TaskItem';
import { ReactComponent as ArrowRightIcon } from '../../utilities/assets/arrow_right_icon.svg';
import { ReactComponent as ArrowDownIcon } from '../../utilities/assets/arrow_down_icon.svg';

import { DropdownButton } from './CompletedTasksList.styles';

export function CompletedTasksList({
  isDropdownOpen, toggleDropdown, tasks, editTask,
}) {
  return (
    <>
      <DropdownButton onClick={toggleDropdown}>
        {isDropdownOpen ? <ArrowDownIcon fill="#FFFFFF" /> : <ArrowRightIcon fill="#FFFFFF" />}
        <span>Done</span>
        <span>{tasks.length}</span>
      </DropdownButton>
      {isDropdownOpen && (
        <>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onComplete={() => editTask(task.id, { ...task, isCompleted: !task.isCompleted })}
              onFavorite={() => editTask(task.id, { ...task, isFavorite: !task.isFavorite })}
            />
          ))}
        </>
      )}
    </>
  );
}

CompletedTasksList.propTypes = {
  toggleDropdown: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
  isDropdownOpen: PropTypes.bool,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
      isFavorite: PropTypes.bool,
      projectId: PropTypes.string,
      projectTitle: PropTypes.string,
      deadline: PropTypes.string,
      timeStump: PropTypes.string,
      description: PropTypes.string,
      pomodoro: PropTypes.shape({
        done: PropTypes.number,
        est: PropTypes.number,
      }),
    }),
  ).isRequired,
};

CompletedTasksList.defaultProps = {
  isDropdownOpen: false,
};
