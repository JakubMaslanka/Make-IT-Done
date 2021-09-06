/* eslint-disable no-alert */
import React, { useEffect, useState, useContext } from 'react';
import { CountdownSettings } from '../CountdownSettings';
import { PomodoroTasks } from '../PomodoroTasks';
import { CountdownTimer } from '../CountdownTimer/CountdownTimer';
import { ModalMenu } from '../../utilities/ModalMenu';

import { ReactComponent as SettingsIcon } from '../../utilities/assets/settings_icon.svg';
import { ReactComponent as NextIcon } from '../../utilities/assets/skip_next_icon.svg';

import {
  PomodoroTimerContainer,
  TimersList,
  Button,
  CountdownContainer,
  ButtonContainer,
  Title,
} from './PomodoroManager.styles';

import { TasksContext } from '../../context/TasksContext';

export function PomodoroManager() {
  const { tasks, editTask } = useContext(TasksContext);
  const pomodoroTasks = tasks.filter((task) => task.pomodoro);

  const [activeTaskId, setActiveTaskId] = useState(
    pomodoroTasks.length > 0
      ? pomodoroTasks[0].id
      : null,
  );
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
          <CountdownSettings currentRound={rounds} updateRounds={updateRounds} />
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
