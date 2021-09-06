import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useCalendar } from '../../utilities/useCalendar';
import { ModalMenu } from '../../utilities/ModalMenu';
import { TasksContext } from '../../context/TasksContext';

import { MonthIndicator } from '../MonthIndicator/MonthIndicator';
import { TasksForSelectedDay } from '../TasksForSelectedDay';

import {
  Hr,
  CalendarContainer,
  DayOfWeek,
  DaysGrid,
  DayContainer,
  EventContainer,
  EventTitle,
} from './CalendarManager.styles';

export function CalendarManager() {
  const { tasks, setTask } = useContext(TasksContext);
  const [month, setMonth] = useState(0);
  const [selected, setSelected] = useState(null);
  const { days, dateDisplay } = useCalendar(tasks, month);

  const tasksForDate = (date) => {
    const filteredTasks = tasks.filter((task) => (task.deadline === date ? task : null));
    return filteredTasks.length > 0 ? filteredTasks : undefined;
  };

  return (
    <>
      <MonthIndicator
        dateDisplay={dateDisplay}
        onNext={() => setMonth(month + 1)}
        onBack={() => setMonth(month - 1)}
      />
      <Hr size="1" />
      <CalendarContainer>
        <DayOfWeek>
          <p>Monday</p>
          <p>Tuesday</p>
          <p>Wednesday</p>
          <p>Thursday</p>
          <p>Friday</p>
          <p>Saturday</p>
          <p>Sunday</p>
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
      </CalendarContainer>
      {
        selected && (
          <ModalMenu
            title={`Tasks for ${selected}`}
            onClose={() => setSelected(null)}
          >
            <TasksForSelectedDay
              tasksInSelectedDay={tasksForDate(selected)}
              onClose={() => setSelected(null)}
              selectedDay={selected}
              onComplete={(taskIdx) => {
                setTask(tasks.map((task) => (
                  task.id === taskIdx
                    ? { ...task, isCompleted: !task.isCompleted }
                    : task)));
              }}
              onCreate={({ title }) => {
                setTask([...tasks,
                  {
                    title,
                    id: new Date().getMilliseconds(),
                    deadline: selected,
                    isCompleted: false,
                    isFavorite: false,
                  }]);
                setSelected(null);
              }}
            />
          </ModalMenu>
        )
      }
    </>
  );
}

const Day = ({ day, onClick }) => (
  <DayContainer isCurrentDay={day.isCurrentDay} skipped={day.value === 'skipped'} onClick={onClick}>
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
