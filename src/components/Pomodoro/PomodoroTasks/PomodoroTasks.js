import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { ReactComponent as CheckCircle } from '../../../icons/check_circle_icon.svg';
import { ReactComponent as UncheckCircle } from '../../../icons/uncheck_circle_icon.svg';
import { ReactComponent as MoreOptionIcon } from '../../../icons/more_option_icon.svg';

import {
  H3,
  TaskItem,
  Container,
  TaskContainer,
} from './PomodoroTasks.styles';

export function PomodoroTasks({
  setTitle, tasks, activeTaskId, setActiveTaskId,
}) {
  const history = useHistory();
  return (
    <Container>
      {tasks.map((task) => (
        <TaskItem
          onClick={() => {
            setActiveTaskId(task.id);
            setTitle(task.title);
          }}
          key={task.id}
          activeTaskBorder={task.id === activeTaskId}
        >
          {task.isCompleted ? (
            <CheckCircle fill="#1BBC9B" />
          ) : (
            <UncheckCircle fill="#128069" />
          )}
          <TaskContainer>
            <H3 isCompleted={task.isCompleted}>{task.title}</H3>
            <span>{task.pomodoro.done}</span>
            <span>/</span>
            <span>{task.pomodoro.est}</span>
          </TaskContainer>
          <MoreOptionIcon fill="#128069" onClick={() => history.push(`${window.location.pathname}/${task.id}`)} />
        </TaskItem>

      ))}
    </Container>
  );
}

PomodoroTasks.propTypes = {
  setTitle: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeTaskId: PropTypes.number,
  setActiveTaskId: PropTypes.func.isRequired,
};

PomodoroTasks.defaultProps = {
  activeTaskId: null,
};
