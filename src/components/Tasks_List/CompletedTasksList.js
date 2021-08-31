/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import TaskItem from './TaskItem';
import { ReactComponent as ArrowRightIcon } from '../utilities/assets/arrow_right_icon.svg';
import { ReactComponent as ArrowDownIcon } from '../utilities/assets/arrow_down_icon.svg';

function CompletedTasksList({
  isDropdownOpen, toggleDropdown, completedTasks, editTask,
}) {
  return (
    <>
      <DropdownButton onClick={toggleDropdown}>
        {isDropdownOpen ? <ArrowDownIcon fill="#FFFFFF" /> : <ArrowRightIcon fill="#FFFFFF" />}
        <span>Done</span>
        <span>{completedTasks.length}</span>
      </DropdownButton>
      {isDropdownOpen && (
        <>
          {completedTasks.map((task) => (
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

export default CompletedTasksList;

const DropdownButton = styled.span`
    background-color: #2D3E50;
    border-radius: 10px;
    padding: 10px;
    margin: 0px 10px;
    cursor: pointer;
    color: #FFFFFF;
    display: flex;
    width: 100px;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: 10px;
    &:hover{
      background-color: #2f455b;
    }
    span:last-child {
      color: #AAAAAA;
    }
`;
