import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

import { ReactComponent as PublishIcon } from '../../../icons/submit_icon.svg';
import { ReactComponent as CheckCircle } from '../../../icons/check_circle_icon.svg';
import { ReactComponent as UncheckCircle } from '../../../icons/uncheck_circle_icon.svg';
import { ReactComponent as OpenEditorIcon } from '../../../icons/more_option_icon.svg';

import {
  Title,
  TextInput,
  SubmitButton,
  FormContainer,
  TasksContainer,
  TitleContainer,
  NoTasksContainer,
} from './TasksForSelectedDay.styles';

export function TasksForSelectedDay({
  tasksInSelectedDay, onCreate, onComplete, selectedDay, onClose,
}) {
  const tasksTitle = useRef(null);
  const history = useHistory();
  const handleTaskSubmit = (e) => {
    e.preventDefault();
    onCreate({
      title: tasksTitle.current.value,
      isCompleted: false,
      isFavorite: false,
      deadline: selectedDay || null,
      timeStump: moment().format(),
    });
    tasksTitle.current.value = '';
  };

  return (
    <>
      {tasksInSelectedDay ? (tasksInSelectedDay.map((task) => (
        <TasksContainer key={task.id}>
          {task.isCompleted
            ? <CheckCircle onClick={() => onComplete(task)} fill="#1BBC9B" />
            : <UncheckCircle onClick={() => onComplete(task)} fill="#128069" />}
          <TitleContainer>
            <Title isCompleted={task.isCompleted}>
              <h3>{(task.title.length > 18) ? `${task.title.substr(0, 18)}...` : task.title}</h3>
            </Title>
            <OpenEditorIcon
              fill="#128069"
              onClick={() => {
                onClose();
                history.push(`${window.location.pathname}/${task.id}`);
              }}
            />
          </TitleContainer>
        </TasksContainer>
      ))) : (
        <NoTasksContainer>
          <p>It looks like you haven&lsquo;t planned tasks for this day!🥳</p>
          <br />
          <p>Remember that you can always add one!</p>
          <p>👇👇👇</p>
        </NoTasksContainer>
      )}
      <FormContainer onSubmit={handleTaskSubmit}>
        <SubmitButton type="submit">
          <PublishIcon />
        </SubmitButton>
        <TextInput required placeholder="Add new task" type="text" ref={tasksTitle} />
      </FormContainer>
    </>
  );
}

TasksForSelectedDay.propTypes = {
  tasksInSelectedDay: PropTypes.arrayOf(
    PropTypes.object,
  ),
  onCreate: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedDay: PropTypes.string.isRequired,
};

TasksForSelectedDay.defaultProps = {
  tasksInSelectedDay: undefined,
};
