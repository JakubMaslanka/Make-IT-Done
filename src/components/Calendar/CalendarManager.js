/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import useCalendar from '../utilities/useCalendar';

import MonthIndicator from './MonthIndicator';
import TasksModalMenu from './TasksModalMenu';
import { TasksContext } from '../context/TasksContext';

export default function CalendarManager() {
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
          {days.map((d) => (
            <Day
              key={d.idx}
              day={d}
              onClick={() => (d.value !== 'skipped' ? setSelected(d.date) : null)}
            />
          ))}
        </DaysGrid>
      </CalendarContainer>
      {
        selected && (
          <TasksModalMenu
            tasksInSelectedDay={tasksForDate(selected)}
            selectedDay={selected}
            onClose={() => setSelected(null)}
            onComplete={(taskIdx) => {
              setTask(tasks.map((task) => (
                task.id === taskIdx
                  ? { ...task, isCompleted: !task.isCompleted }
                  : task)));
            }}
            onCreate={({ title }) => {
              setTask([...tasks, { title, id: new Date().getMilliseconds(), deadline: selected }]);
              setSelected(null);
            }}
          />
        )
      }
    </>
  );
}

const Day = ({ day, onClick }) => {
  const className = `day ${day.value === 'skipped' ? 'skipped' : ''} ${day.isCurrentDay ? 'currentDay' : ''}`;
  return (
    <div onClick={onClick} className={className}>
      {day.value === 'skipped' ? '' : day.value}
      <div className="eventsContainer">
        {day.tasks && day.tasks.map((task) => <CalendarTask task={task} key={task.id} />)}
      </div>
    </div>
  );
};

const CalendarTask = ({ task }) => (
  <div className={`${task.isCompleted ? 'completed' : ''} event`}>{(task.title.length > 12) ? `${task.title.substr(0, 12)}...` : task.title}</div>
);

const Hr = styled.hr`
    opacity: 80%;
    width: 95%;
`;

const DayOfWeek = styled.div`
    width: 100%;
    margin-bottom: 20px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    color: #1BBC9B;
`;

const DaysGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, minmax(120px, 1fr));
    grid-auto-rows: 100px;
    justify-items: center;
    align-items: center;
    overflow: auto;
`;

const CalendarContainer = styled.div`
    width: 95%;
    margin: auto;

      .day{
        width: 100%;
        height: 100%;
        padding: 10px;
        text-align: right;
        cursor: pointer;
        box-sizing: border-box;
        color: #98a0a6;
        font-size: .9rem;
        border: 1px solid rgba(166, 168, 179, 0.12);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
          &:hover{
            background-color: rgba(166, 168, 179, 0.12);
          color: #1BBC9B;;
          }
      }

      .currentDay {
        opacity: 80%;
        background-color: #2D3E50;
        color: #1BBC9B;
          &:hover {
            background-color: rgba(166, 168, 179, 0.12);
            color: #1BBC9B;;
          }
      }

      .event {
        font-size: 11px;
        padding: 3px 8px;
        margin: 8px 0px;
        background-color: rgba(27, 188, 155, .2);
        color: white;
        border-left: 5px solid #1BBC9B;
        max-height: 55px;
        overflow: hidden;
      }

      .eventsContainer{
        overflow-y: scroll;
        text-align: left;
      }

      .completed{
        background-color: #1BBC9B;
      }

      .skipped {
        cursor: default !important;
        background: none !important;
        box-shadow: none !important;
        border: none !important;
      }
    `;
