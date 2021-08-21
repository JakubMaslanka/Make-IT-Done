/* eslint-disable max-len */
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

function PomodoroManager() {
  const { tasks, editTask } = useContext(TasksContext);
  const pomodoroTasks = tasks.filter((task) => task.pomodoro);

  const [activeTaskId, setActiveTaskId] = useState(pomodoroTasks.length > 0 ? pomodoroTasks[0].id : null);
  const [title, setTitle] = useState(pomodoroTasks.length > 0 ? `Working on ${pomodoroTasks[0].title}` : 'Time to work!');
  const [timer, setTimer] = useState(0);
  const [countdown, setCountdown] = useState(false);
  const [roundNumber, setRoundNumber] = useState(1);
  const [modalMenu, setModalMenu] = useState(false);
  const [rounds, setRounds] = useState({
    work: 25,
    short: 5,
    long: 15,
    active: 'work',
  });

  const taskFromId = pomodoroTasks.find((task) => task.id === activeTaskId);
  const modalMenuToggle = () => setModalMenu((prevState) => !prevState);
  const setTaskTitle = (defaultTitle) => setTitle(taskFromId ? `Working on ${taskFromId.title}` : defaultTitle);
  const stopAimate = () => setCountdown(false);

  const setTimerTime = (newRound) => {
    switch (newRound.active) {
      case 'work':
        setTaskTitle('Time to work!');
        setTimer(newRound.work);
        break;
      case 'short':
        setTaskTitle('Time for a break!');
        setTimer(newRound.short);
        break;
      case 'long':
        setTaskTitle('Time for a longer break!');
        setTimer(newRound.long);
        break;
      default:
        setTimer(0);
        break;
    }
  };

  const updateRounds = (newRound) => {
    setModalMenu(false);
    setRounds(newRound);
    setTimerTime(newRound);
  };

  const setCurrentTimer = (activeTimer) => {
    stopAimate();
    updateRounds({
      ...rounds,
      active: activeTimer,
    });
    setTimerTime(rounds);
  };

  const taskDoneValueIncrement = () => {
    editTask(taskFromId.id, {
      ...taskFromId,
      isCompleted: taskFromId.pomodoro.done + 1 >= taskFromId.pomodoro.est,
      pomodoro: {
        est: taskFromId.pomodoro.est,
        done: taskFromId.pomodoro.done + 1,
      },
    });
  };

  const stopRound = () => {
    if (window.confirm('Are you sure, you want to stop the timer?')) {
      stopAimate();
    }
  };

  const nextRound = () => {
    switch (rounds.active) {
      case 'work':
        if (taskFromId) {
          taskDoneValueIncrement();
        }
        setRoundNumber((prevRound) => prevRound + 1);
        if (roundNumber % 4 === 0) {
          setCurrentTimer('long');
        } else {
          setCurrentTimer('short');
        }
        break;
      case 'short':
        setCurrentTimer('work');
        break;
      case 'long':
        setRoundNumber(1);
        setCurrentTimer('work');
        break;
      default:
        break;
    }
  };

  useEffect(() => updateRounds(rounds), [rounds, countdown]);

  return (
    <PomodoroTimerContainer>
      <h1>Pomodoro Timer</h1>
      {modalMenu && (
        <ModalMenu
          title="Set your intervals!"
          onClose={modalMenuToggle}
        >
          <Settings currentRound={rounds} updateRounds={updateRounds} />
        </ModalMenu>
      )}
      <TimersList>
        <li>
          <Button
            type="button"
            activeButton={rounds.active === 'work' && 'work'}
            onClick={() => setCurrentTimer('work')}
          >
            Work
          </Button>
        </li>
        <li>
          <Button
            type="button"
            activeButton={rounds.active === 'short' && 'short'}
            onClick={() => setCurrentTimer('short')}
          >
            Short Break
          </Button>
        </li>
        <li>
          <Button
            type="button"
            activeButton={rounds.active === 'long' && 'long'}
            onClick={() => setCurrentTimer('long')}
          >
            Long Break
          </Button>
        </li>
      </TimersList>
      <CountdownContainer>
        <CountdownTimer
          uniqueKey={new Date().getMilliseconds()}
          active={rounds.active}
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
            activeButton={countdown && 'work'}
            onClick={stopRound}
          >
            STOP
          </Button>
        )}
        <NextIcon onClick={() => (countdown && window.confirm('Are you sure you want to finish the round early?') ? nextRound() : null)} />
      </ButtonContainer>
      <Title>{title}</Title>
      <PomodoroTasks
        tasks={pomodoroTasks}
        activeTaskId={activeTaskId}
        setActiveTaskId={(taskId) => setActiveTaskId(taskId)}
        setTitle={(newTitle) => setTitle(`Working on ${newTitle}`)}
      />
    </PomodoroTimerContainer>
  );
}

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
    ${(props) => {
    let backgroundColor = 'background-color: #2D3E50';
    switch (props.activeButton) {
      case 'work':
        backgroundColor = 'background-color: #FE4D4C';
        break;
      case 'short':
        backgroundColor = 'background-color: #1BBC9B';
        break;
      case 'long':
        backgroundColor = 'background-color: #28D1F8';
        break;
      default:
        break;
    }
    return backgroundColor;
  }};
    ${(props) => (props.bigger ? 'padding: 14px 32px;' : null)};
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
