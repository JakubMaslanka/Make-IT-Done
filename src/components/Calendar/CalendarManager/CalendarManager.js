import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useCalendar } from '../../../hooks/useCalendar';
import { ModalMenu } from '../../../utils/ModalMenu';
import { MonthIndicator } from '../MonthIndicator/MonthIndicator';
import { TasksForSelectedDay } from '../TasksForSelectedDay';
import { useTasks, useSoundEffect } from '../../../hooks';
import {
  Hr,
  DaysGrid,
  DayOfWeek,
  EventTitle,
  DayContainer,
  EventContainer,
  CalendarContainer,
} from './CalendarManager.styles';

export const tasksForDate = (tasks, date) => {
  const filteredTasks = tasks.filter((task) => (task.deadline === date ? task : null));
  return filteredTasks.length > 0 ? filteredTasks : undefined;
};

export function CalendarManager() {
  const { tasks, handleTaskCreate, handleTaskEdit } = useTasks();
  const [month, setMonth] = useState(0);
  const [selected, setSelected] = useState(null);
  const { days, dateDisplay } = useCalendar(tasks, month);
  const [playSound] = useSoundEffect();

  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <CalendarContainer>
      <MonthIndicator
        dateDisplay={dateDisplay}
        onNext={() => setMonth(month + 1)}
        onBack={() => setMonth(month - 1)}
      />
      <Hr size="1" />
      <DayOfWeek>
        {weekdays.map((day) => (window.innerWidth > 655
          ? <p key={day}>{day}</p>
          : <p key={day}>{day.substr(0, 3)}</p>))}
      </DayOfWeek>

      <DaysGrid>
        {days.map((day) => (
          <Day
            key={day.idx}
            day={day}
            onClick={() => (day.value !== 'skipped' ? setSelected(day.date) : null)}
          />
        ))}
      </DaysGrid>
      {
        selected && (
          <ModalMenu
            title={`Tasks for ${selected}`}
            onClose={() => setSelected(null)}
          >
            <TasksForSelectedDay
              tasksInSelectedDay={tasksForDate(tasks, selected)}
              onClose={() => setSelected(null)}
              selectedDay={selected}
              onComplete={(task) => {
                playSound(!task.isCompleted);
                handleTaskEdit(task.id, { ...task, isCompleted: !task.isCompleted });
              }}
              onCreate={(taskToCreate) => handleTaskCreate(taskToCreate)}
            />
          </ModalMenu>
        )
      }
    </CalendarContainer>
  );
}

const Day = ({ day, onClick }) => (
  <DayContainer isWeekend={day.isWeekendDay} isCurrentDay={day.isCurrentDay} skipped={day.value === 'skipped'} onClick={onClick}>
    {day.value === 'skipped' ? '' : day.value}
    <EventContainer>
      {day.tasks && day.tasks.map((task) => <CalendarTask task={task} key={task.id} />)}
    </EventContainer>
  </DayContainer>
);

const CalendarTask = ({ task }) => (
  <EventTitle completed={task.isCompleted}>{(task.title.length > 12) ? `${task.title.substr(0, 12)}...` : task.title}</EventTitle>
);

Day.propTypes = {
  day: PropTypes.shape({
    date: PropTypes.string,
    idx: PropTypes.number,
    isCurrentDay: PropTypes.bool,
    isWeekendDay: PropTypes.bool,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    tasks: PropTypes.arrayOf(PropTypes.object, PropTypes.any),
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

CalendarTask.propTypes = {
  task: PropTypes.shape({
    deadline: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    isCompleted: PropTypes.bool,
  }).isRequired,
};
