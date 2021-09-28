import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

import { ReactComponent as CheckCircle } from '../../../icons/check_circle_icon.svg';
import { ReactComponent as UncheckCircle } from '../../../icons/uncheck_circle_icon.svg';
import { ReactComponent as NoteCalendar } from '../../../icons/note_logo.svg';
import { ReactComponent as HomeIcon } from '../../../icons/home_icon.svg';
import { ReactComponent as SmallCalendar } from '../../../icons/calendar_icon.svg';
import { ReactComponent as PomodoroClockIcon } from '../../../icons/pomodoro_clock_icon.svg';
import { ReactComponent as UncheckStarIcon } from '../../../icons/uncheck_star_icon.svg';
import { ReactComponent as CheckStarIcon } from '../../../icons/check_star_icon.svg';

import {
  TaskContainer,
  Title,
  TaskDetails,
} from './TaskItem.styles';

export function TaskItem({
  task, onComplete, onFavorite, itemColor,
}) {
  const history = useHistory();
  return (
    <>
      <TaskContainer
        onClick={(e) => (e.target.textContent !== '' ? history.push(`${window.location.pathname}/${task.id}`) : null)}
        backgroundColor={itemColor}
        id="taskItem"
        isCompleted={task.isCompleted}
      >
        {task.isCompleted ? (
          <CheckCircle id="taskComplete" fill={itemColor ? '#FFFFFF' : '#1BBC9B'} onClick={onComplete} />
        ) : (
          <UncheckCircle id="taskUncomplete" fill={itemColor ? '#FFFFFF' : '#1BBC9B'} onClick={onComplete} />
        )}
        <Title
          isCompleted={task.isCompleted}
          areDetailsSet={task.deadline || task.description || task.pomodoro || task.projectTitle}
        >
          <h3>{task.title.length > 23 && window.innerWidth < 900 ? `${task.title.substring(0, 22)}...` : `${task.title}`}</h3>
          <TaskDetails brighter={itemColor} smallerScreen={window.innerWidth < 480}>
            {task.description && (
              <p><NoteCalendar /></p>
            )}
            {task.projectTitle && (
              <p>
                <HomeIcon />
                {task.projectTitle}
              </p>
            )}
            {task.deadline && (
              <p>
                <SmallCalendar />
                {moment(task.deadline).format('ddd, D MMMM')}
              </p>
            )}
            {task.pomodoro && (
              <p>
                <PomodoroClockIcon />
                {`${task.pomodoro.done}/${task.pomodoro.est}`}
              </p>
            )}
          </TaskDetails>
        </Title>
        {task.isFavorite ? (
          <CheckStarIcon fill={itemColor ? '#FFFFFF' : '#1BBC9B'} onClick={onFavorite} />
        ) : (
          <UncheckStarIcon fill={itemColor ? '#FFFFFF' : '#1BBC9B'} onClick={onFavorite} />
        )}
      </TaskContainer>
    </>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
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
  }).isRequired,
  onComplete: PropTypes.func,
  onFavorite: PropTypes.func,
  itemColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
};

TaskItem.defaultProps = {
  onComplete: () => Error('For full functionality you should pass onComplete handle'),
  onFavorite: () => Error('For full functionality you should pass onFavorite handle'),
  itemColor: false,
};
