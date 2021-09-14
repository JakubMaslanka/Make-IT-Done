import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { DropdownCalendarMenu } from '../Dropdown_Menus/CalendarMenu';
import { DropdownPomodoroMenu } from '../Dropdown_Menus/PomodoroMenu';
import { DropdownProjectsMenu } from '../Dropdown_Menus/ProjectsMenu';

import { ReactComponent as PublishIcon } from '../../../icons/submit_icon.svg';
import { ReactComponent as DataPickUpIcon } from '../../../icons/data_pickup_icon.svg';
import { ReactComponent as PomodoroClockIcon } from '../../../icons/pomodoro_clock_icon.svg';
import { ReactComponent as ProjectsIcon } from '../../../icons/projects_icon.svg';

import {
  CreatorContainer,
  DatePicker,
  FormContainer,
  SubmitButton,
  TaskOptions,
  TextInput,
} from './TasksCreator.styles';

import { useClickOutsideHook } from '../../../hooks';

export function TasksCreator({ onCreate }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(null);
  const [isCalendarOpen, onCalendarOpen] = useState(false);
  const [pomodoroEst, setPomodoroEst] = useState(null);
  const [project, setProject] = useState({
    title: null,
    id: null,
  });

  const handleTaskCreate = (e) => {
    e.preventDefault();
    onCreate({
      title,
      isCompleted: false,
      isFavorite: false,
      deadline: date ? moment(date).format('M/D/YYYY') : null,
      pomodoro: pomodoroEst ? {
        est: pomodoroEst,
        done: 0,
      } : null,
      projectId: project.id,
      projectTitle: project.title,
      timeStump: moment().format(),
    });
    setTitle('');
    setDate(null);
    setPomodoroEst(null);
    setProject({
      title: null,
      id: null,
    });
  };

  const handleProjectSubmit = (pickedProject) => {
    setProject(pickedProject);
  };

  const handleDateSubmit = (pickedDate) => {
    if (pickedDate !== date) {
      setDate(pickedDate);
      onCalendarOpen(false);
    }
  };

  const handlePomodorosSubmit = (pickedPomodoros) => {
    setPomodoroEst(pickedPomodoros);
  };

  const domNode = useClickOutsideHook(() => onCalendarOpen(false));

  return (
    <CreatorContainer>
      <div ref={domNode}>
        {isCalendarOpen && (
        <DatePicker
          onClickDay={handleDateSubmit}
          onChange={setDate}
          value={new Date() || date}
          locale="en-EN"
        />
        )}
      </div>
      <FormContainer onSubmit={handleTaskCreate}>
        <SubmitButton type="submit">
          <PublishIcon />
        </SubmitButton>
        <TextInput required placeholder="Add new task" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <TaskOptions smallerScreen={window.innerWidth < 970}>
          <DropdownProjectsMenu
            icon={<ProjectsIcon />}
            onProjectPick={handleProjectSubmit}
            selectedProject={project}
            label={project.id ? project.title : null}
          />
          <DropdownCalendarMenu
            onDatePick={handleDateSubmit}
            isOpen={(state) => onCalendarOpen(state)}
            icon={<DataPickUpIcon />}
            deadline={date}
            label={date ? moment(date).format('ddd, D MMMM') : null}
          />
          <DropdownPomodoroMenu
            icon={<PomodoroClockIcon />}
            onPomodorosPick={handlePomodorosSubmit}
            isPomodoroSet={pomodoroEst}
            label={pomodoroEst ? `${pomodoroEst} Pomodoros` : null}
          />
        </TaskOptions>
      </FormContainer>
    </CreatorContainer>
  );
}

TasksCreator.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
