import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { useConfirm, useClickOutsideHook } from '../../../hooks';

import { ReactComponent as CheckCircle } from '../../../icons/check_circle_icon.svg';
import { ReactComponent as UncheckCircle } from '../../../icons/uncheck_circle_icon.svg';
import { ReactComponent as UncheckStarIcon } from '../../../icons/uncheck_star_icon.svg';
import { ReactComponent as CheckStarIcon } from '../../../icons/check_star_icon.svg';
import { ReactComponent as TrashIcon } from '../../../icons/trash_icon.svg';
import { ReactComponent as ArrowRight } from '../../../icons/arrow_right_icon.svg';
import { ReactComponent as DataPickUpIcon } from '../../../icons/data_pickup_icon.svg';
import { ReactComponent as PomodoroClockIcon } from '../../../icons/pomodoro_clock_icon.svg';
import { ReactComponent as ProjectsIcon } from '../../../icons/projects_icon.svg';

import {
  DropdownCalendarMenu,
  DropdownPomodoroMenu,
  DropdownProjectsMenu,
} from '../Dropdown_Menus';
import {
  EditorContainer,
  HeaderContainer,
  DatePicker,
  Textarea,
  FooterContainer,
  GreyedOutBackground,
} from './TaskEditor.styles';

export function TaskEditor({
  taskToEdit, onEdit, onClose, onDelete,
}) {
  const [newTitle, setNewTitle] = useState(taskToEdit.title);
  const [date, setDate] = useState(taskToEdit.deadline || null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [taskDescription, setTaskDescription] = useState(taskToEdit.description || '');

  const handleTitleEdit = () => onEdit(
    taskToEdit.id,
    { ...taskToEdit, title: newTitle },
  );
  const handleCompleted = () => onEdit(
    taskToEdit.id,
    {
      ...taskToEdit,
      isCompleted: !taskToEdit.isCompleted,
    },
  );
  const handleFavoriteMark = () => onEdit(
    taskToEdit.id,
    {
      ...taskToEdit,
      isFavorite: !taskToEdit.isFavorite,
    },
  );
  const handleDescriptionEdit = () => onEdit(
    taskToEdit.id,
    {
      ...taskToEdit,
      description: taskDescription,
    },
  );

  const handleProjectEdit = (pickedProject) => {
    onEdit(taskToEdit.id, {
      ...taskToEdit,
      projectId: pickedProject.id,
      projectTitle: pickedProject.title,
    });
  };
  const handleDateEdit = (pickedDate) => {
    if (date !== pickedDate) {
      onEdit(taskToEdit.id, { ...taskToEdit, deadline: pickedDate ? moment(pickedDate).format('M/D/YYYY') : null });
      setCalendarOpen(false);
    }
  };
  const handlePomodorosEdit = (pickedPomodoros) => {
    if (taskToEdit.pomodoro) {
      onEdit(taskToEdit.id, {
        ...taskToEdit,
        pomodoro: pickedPomodoros === null
          ? null
          : {
            est: pickedPomodoros,
            done: taskToEdit.pomodoro.done,
          },
      });
    } else {
      onEdit(taskToEdit.id, {
        ...taskToEdit,
        pomodoro: {
          est: pickedPomodoros,
          done: 0,
        },
      });
    }
  };

  const handleDelete = () => {
    onDelete(taskToEdit.id);
    onClose();
  };

  const { confirmTrigger, ConfirmContainer, isDialogOpen } = useConfirm(handleDelete, 'Task deleting', `The task "${taskToEdit.title}" will be permanently deleted. Are you sure?`);
  const domNode = useClickOutsideHook(() => isDialogOpen || onClose());

  return (
    <>
      <EditorContainer ref={domNode}>
        <HeaderContainer>
          {taskToEdit.isCompleted ? (
            <CheckCircle fill="#1BBC9B" onClick={handleCompleted} />
          ) : (
            <UncheckCircle fill="#128069" onClick={handleCompleted} />
          )}
          <input onBlur={handleTitleEdit} onChange={(e) => setNewTitle(e.target.value)} value={newTitle} type="text" />
          {taskToEdit.isFavorite ? (
            <CheckStarIcon fill="#1BBC9B" onClick={handleFavoriteMark} />
          ) : (
            <UncheckStarIcon fill="#128069" onClick={handleFavoriteMark} />
          )}
        </HeaderContainer>
        <DropdownProjectsMenu
          editorStyle
          icon={<ProjectsIcon fill="#128069" />}
          onProjectPick={handleProjectEdit}
          selectedProject={{ id: taskToEdit.projectId, title: taskToEdit.title }}
          label={taskToEdit.projectTitle ? `${taskToEdit.projectTitle}` : 'Choose A Project'}
        />
        {calendarOpen && (
        <DatePicker
          onClickDay={handleDateEdit}
          onChange={setDate}
          value={new Date() || date}
          locale="en-EN"
        />
        )}
        <DropdownCalendarMenu
          editorStyle
          deadline={taskToEdit.deadline}
          onDatePick={handleDateEdit}
          isOpen={(state) => setCalendarOpen(state)}
          icon={<DataPickUpIcon fill="#128069" />}
          label={taskToEdit.deadline ? moment(taskToEdit.deadline).format('ddd, D MMMM') : 'Add deadline'}
        />
        <DropdownPomodoroMenu
          editorStyle
          onPomodorosPick={handlePomodorosEdit}
          isPomodoroSet={taskToEdit.pomodoro}
          icon={<PomodoroClockIcon fill="#128069" />}
          label={taskToEdit.pomodoro ? `${taskToEdit.pomodoro.est} Pomodoros` : 'Set Pomodoros'}
        />
        <Textarea maxLength="150" onBlur={handleDescriptionEdit} onChange={(e) => setTaskDescription(e.target.value)} value={taskDescription} type="text" placeholder="Add a note" />
        <FooterContainer>
          <ArrowRight fill="#128069" onClick={onClose} />
          <p>{`Created on ${moment(taskToEdit.timeStump).format('ddd., D MMM YYYY')}`}</p>
          <ConfirmContainer>
            <TrashIcon fill="#128069" onClick={confirmTrigger} />
          </ConfirmContainer>
        </FooterContainer>
      </EditorContainer>
      <GreyedOutBackground />
    </>
  );
}

TaskEditor.propTypes = {
  taskToEdit: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    projectId: PropTypes.string,
    projectTitle: PropTypes.string,
    deadline: PropTypes.string,
    timeStump: PropTypes.string,
    description: PropTypes.string,
    pomodoro: PropTypes.shape({
      done: PropTypes.number,
      est: PropTypes.number,
    }),
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
