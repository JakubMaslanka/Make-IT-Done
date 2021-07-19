/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as TaskIcon } from '../utilities/assets/tasks_icon.svg';
import { ReactComponent as ProjectsIcon } from '../utilities/assets/projects_icon.svg';
import { ReactComponent as HomeIcon } from '../utilities/assets/home_icon.svg';
import { ReactComponent as CalendarIcon } from '../utilities/assets/calendar_icon.svg';
import { ReactComponent as PomodoroIcon } from '../utilities/assets/pomodoro_icon.svg';

function Navigation() {
  const [activeLinkIdx, setActiveLinkIdx] = useState(2);

  /* Find a better way to mark active link */
  return (
    <>
      <NavContainer>
        <NavLink
          to="/tasks"
          isActive={(match) => {
            if (!match) {
              return false;
            }
            return setActiveLinkIdx(0);
          }}
        >
          <TaskIcon className={activeLinkIdx === 0 ? 'styledSvg active' : 'styledSvg'} />
        </NavLink>
        <NavLink
          to="/projects"
          isActive={(match) => {
            if (!match) {
              return false;
            }
            return setActiveLinkIdx(1);
          }}
        >
          <ProjectsIcon className={activeLinkIdx === 1 ? 'styledSvg active' : 'styledSvg'} />
        </NavLink>
        <NavLink
          to="/"
          exact
          isActive={(match) => {
            if (!match) {
              return false;
            }
            return setActiveLinkIdx(2);
          }}
        >
          <HomeIcon className={activeLinkIdx === 2 ? 'styledSvg active' : 'styledSvg'} />
        </NavLink>
        <NavLink
          to="/calendar"
          isActive={(match) => {
            if (!match) {
              return false;
            }
            return setActiveLinkIdx(3);
          }}
        >
          <CalendarIcon className={activeLinkIdx === 3 ? 'styledSvg active' : 'styledSvg'} />
        </NavLink>
        <NavLink
          to="/pomodoro"
          isActive={(match) => {
            if (!match) {
              return false;
            }
            return setActiveLinkIdx(4);
          }}
        >
          <PomodoroIcon className={activeLinkIdx === 4 ? 'styledSvg active' : 'styledSvg'} />
        </NavLink>
      </NavContainer>
    </>

  );
}

const NavContainer = styled.div`
  background-color: #2D3E50;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 7%;
  .styledSvg{
    fill: #128069;
    width: 28px;
    height: 28px;
    &.active{
      fill: #1BBC9B;
      width: 40px;
      height: 40px;
    }
  }
`;

export default Navigation;
