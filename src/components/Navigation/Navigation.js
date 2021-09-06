/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as TaskIcon } from '../utilities/assets/tasks_icon.svg';
import { ReactComponent as ProjectsIcon } from '../utilities/assets/projects_icon.svg';
import { ReactComponent as HomeIcon } from '../utilities/assets/home_icon.svg';
import { ReactComponent as CalendarIcon } from '../utilities/assets/calendar_icon.svg';
import { ReactComponent as PomodoroIcon } from '../utilities/assets/pomodoro_icon.svg';

import { NavContainer } from './Navigation.styles';

export function Navigation() {
  const [activeLinkIdx, setActiveLinkIdx] = useState(2);

  /* Find a better way to mark active link */
  return (
    <NavContainer>
      <NavLink
        to="/tasks"
        isActive={(match) => (match ? setActiveLinkIdx(0) : null)}
      >
        <TaskIcon className={activeLinkIdx === 0 ? 'styledSvg active' : 'styledSvg'} />
      </NavLink>
      <NavLink
        to="/projects"
        isActive={(match) => (match ? setActiveLinkIdx(1) : null)}
      >
        <ProjectsIcon className={activeLinkIdx === 1 ? 'styledSvg active' : 'styledSvg'} />
      </NavLink>
      <NavLink
        to="/"
        exact
        isActive={(match) => (match ? setActiveLinkIdx(2) : null)}
      >
        <HomeIcon className={activeLinkIdx === 2 ? 'styledSvg active' : 'styledSvg'} />
      </NavLink>
      <NavLink
        to="/calendar"
        isActive={(match) => (match ? setActiveLinkIdx(3) : null)}
      >
        <CalendarIcon className={activeLinkIdx === 3 ? 'styledSvg active' : 'styledSvg'} />
      </NavLink>
      <NavLink
        to="/pomodoro"
        isActive={(match) => (match ? setActiveLinkIdx(4) : null)}
      >
        <PomodoroIcon className={activeLinkIdx === 4 ? 'styledSvg active' : 'styledSvg'} />
      </NavLink>
    </NavContainer>
  );
}
