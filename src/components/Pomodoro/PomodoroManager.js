/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import Settings from './Settings';
import PomodoroTasks from './PomodoroTasks';
import ModalMenu from '../ModalMenu';
import CountdownTimer from './CountdownTimer';

import { ReactComponent as SettingsIcon } from '../utilities/assets/settings_icon.svg';
import { ReactComponent as NextIcon } from '../utilities/assets/skip_next_icon.svg';

import { TasksContext } from '../context/TasksContext';

const PomodoroManager = () => {
  const { tasks, editTask } = useContext(TasksContext);

  // Find other way to handle activeTasks
  const [activeTask, setActiveTask] = useState(tasks.find((task) => (task.pomodoro ? task : null)));
  const [title, setTitle] = useState(activeTask ? `Working on ${tasks[0].title}` : 'Time to work!');
  const [timer, setTimer] = useState(0);
  const [countdown, setCountdown] = useState(false);
  const [round, setRound] = useState(1);
  const [modalMenu, setModalMenu] = useState(false);
  const [schedule, setSchedule] = useState({
    work: 0.1,
    short: 0.1,
    long: 0.1,
    active: 'work',
  });

  const modalMenuToggle = () => setModalMenu((prevState) => !prevState);
  const stopAimate = () => setCountdown(false);
  const setTitleValidation = (defaultTitle) => setTitle(activeTask ? `Working on ${activeTask.title}` : defaultTitle);

  const setTimerTime = (newSchedule) => {
    switch (newSchedule.active) {
      case 'work':
        setTitleValidation('Time to work!');
        setTimer(newSchedule.work);
        break;
      case 'short':
        setTitleValidation('Time for a break!');
        setTimer(newSchedule.short);
        break;
      case 'long':
        setTitleValidation('Time for a longer break!');
        setTimer(newSchedule.long);
        break;
      default:
        setTimer(0);
        break;
    }
  };

  const updateSchedule = (newSchedule) => {
    setModalMenu(false);
    setSchedule(newSchedule);
    setTimerTime(newSchedule);
  };

  const setCurrentTimer = (activeTimer) => {
    stopAimate();
    updateSchedule({
      ...schedule,
      active: activeTimer,
    });
    setTimerTime(schedule);
  };

  const donePomodorosIncrement = () => editTask(activeTask.id, {
    ...activeTask,
    pomodoro: {
      est: activeTask.pomodoro.est,
      done: activeTask.pomodoro.done + 1,
    },
  });

  const stopRound = () => {
    if (window.confirm('Are you sure, you want to stop the timer?')) {
      stopAimate();
    }
  };

  const nextRound = () => {
    switch (schedule.active) {
      case 'work':
        donePomodorosIncrement();
        setRound((prevRound) => prevRound + 1);
        if (round % 4 === 0) {
          setCurrentTimer('long');
        } else {
          setCurrentTimer('short');
        }
        break;
      case 'short':
        setCurrentTimer('work');
        break;
      case 'long':
        setRound(1);
        setCurrentTimer('work');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    updateSchedule(schedule);
    // Found bug here, after choosing another task,
    // list re render itself and selected first task as active
    setActiveTask(tasks.find((task) => (task.pomodoro ? task : null)));
  }, [schedule, countdown]);

  return (
    <PomodoroTimerContainer>
      <h1>Pomodoro Timer</h1>
      {modalMenu && (
        <ModalMenu
          title="Set your intervals!"
          onClose={modalMenuToggle}
        >
          <Settings currentSchedule={schedule} updateSchedule={updateSchedule} />
        </ModalMenu>
      )}
      <TimersList activeButton={schedule.active}>
        <li>
          <Button
            type="button"
            className={schedule.active === 'work' ? 'activeWorkButton' : undefined}
            onClick={() => setCurrentTimer('work')}
          >
            Work
          </Button>
        </li>
        <li>
          <Button
            type="button"
            className={schedule.active === 'short' ? 'activeShortButton' : undefined}
            onClick={() => setCurrentTimer('short')}
          >
            Short Break
          </Button>
        </li>
        <li>
          <Button
            type="button"
            className={schedule.active === 'long' ? 'activeLongButton' : undefined}
            onClick={() => setCurrentTimer('long')}
          >
            Long Break
          </Button>
        </li>
      </TimersList>
      <CountdownContainer>
        <CountdownTimer
          uniqueKey={new Date().getMilliseconds()}
          active={schedule.active}
          timer={timer}
          animate={countdown}
          stopAimate={nextRound}
        />
      </CountdownContainer>
      <ButtonContainer>
        <SettingsIcon onClick={modalMenuToggle} />
        {!countdown ? (
          <Button
            bigger
            type="button"
            onClick={() => setCountdown(true)}
          >
            START

          </Button>
        ) : (
          <Button
            bigger
            type="button"
            isActive={countdown}
            onClick={stopRound}
          >
            STOP
          </Button>
        )}
        <NextIcon onClick={() => (countdown && window.confirm('Are you sure you want to finish the round early?') ? nextRound() : null)} />
      </ButtonContainer>
      <Title>{title}</Title>
      <PomodoroTasks
        tasks={tasks}
        activeTask={activeTask}
        setActiveTask={(task) => setActiveTask(task)}
        setTitle={(newTitle) => setTitle(`Working on ${newTitle}`)}
      />
    </PomodoroTimerContainer>
  );
};

export default PomodoroManager;

const PomodoroTimerContainer = styled.div`
    color:#c9ccea;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        font-size: 42px;
        margin-bottom: 3px;
      }
`;

const TimersList = styled.ul`
    list-style: none;
    display: flex;
    font-size: 16px;
    padding: 5px;
    background-color: #2D3E50;
    border-radius: 24px;
    color: #efefef;
    .activeWorkButton {
        background-color: #FE4D4C;
    }
    .activeShortButton {
        background-color: #1BBC9B;
    }
    .activeLongButton {
        background-color: #28D1F8;
    }
`;

const CountdownContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 240px;
    width: 240px;
    border-radius: 50%;
    color:#efefef;
    background: #2D3E50;
    font-size: 56px;
    box-shadow: 6px 10px 2rem 1px rgba(0,0,0,.6);
`;

const Button = styled.button`
    color:#efefef;
    font-size: 13px;
    padding: 8px 20px;
    border: none;
    border-radius: 42px;
    margin: 4px;
    min-width: 80px;
    cursor: pointer;
    ${(props) => (props.bigger ? 'padding: 14px 32px;' : null)};
    ${(props) => (props.isActive ? 'background-color: #FE4D4C;' : 'background-color: #2D3E50;')};
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px;
    svg{
        fill: #128069;
        padding: 0px 24px;
        width: 28px;
        height: 28px;
        &:hover{
            transition: fill 0.1s ease;
            fill: #1BBC9B;
          }
    }
`;

const Title = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        font-weight: 300;
`;
