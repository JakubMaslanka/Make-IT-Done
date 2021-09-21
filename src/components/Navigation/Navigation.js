import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { ReactComponent as TaskIcon } from '../../icons/tasks_icon.svg';
import { ReactComponent as ProjectsIcon } from '../../icons/projects_icon.svg';
import { ReactComponent as HomeIcon } from '../../icons/home_icon.svg';
import { ReactComponent as CalendarIcon } from '../../icons/calendar_icon.svg';
import { ReactComponent as PomodoroIcon } from '../../icons/pomodoro_icon.svg';
import { ReactComponent as LogoutIcon } from '../../icons/logout_icon.svg';
import {
  NavContainer,
  NavIcon,
  LogoutContainer,
  LinksContainer,
} from './Navigation.styles';
import { useAuth } from '../../hooks';

const HorizontalNav = ({ setActive, active }) => (
  <>
    <NavLink
      to="/tasks"
      isActive={(match) => (match && setActive(0))}
    >
      <NavIcon active={active === 0}>
        <TaskIcon />
      </NavIcon>
    </NavLink>
    <NavLink
      to="/projects"
      isActive={(match) => (match && setActive(1))}
    >
      <NavIcon active={active === 1}>
        <ProjectsIcon />
      </NavIcon>
    </NavLink>
    <NavLink
      to="/home"
      exact
      isActive={(match) => (match && setActive(2))}
    >
      <NavIcon active={active === 2}>
        <HomeIcon />
      </NavIcon>
    </NavLink>
    <NavLink
      to="/calendar"
      isActive={(match) => (match && setActive(3))}
    >
      <NavIcon active={active === 3}>
        <CalendarIcon />
      </NavIcon>
    </NavLink>
    <NavLink
      to="/pomodoro"
      isActive={(match) => (match && setActive(4))}
    >
      <NavIcon active={active === 4}>
        <PomodoroIcon />
      </NavIcon>
    </NavLink>
  </>
);

const VerticalNav = ({ setActive, active }) => {
  const { onLogout } = useAuth();
  return (
    <>
      <LinksContainer>
        <NavLink
          to="/home"
          exact
          isActive={(match) => (match && setActive(2))}
        >
          <NavIcon active={active === 2}>
            <HomeIcon />
          </NavIcon>
        </NavLink>
        <NavLink
          to="/projects"
          isActive={(match) => (match && setActive(1))}
        >
          <NavIcon active={active === 1}>
            <ProjectsIcon />
          </NavIcon>
        </NavLink>
        <NavLink
          to="/calendar"
          isActive={(match) => (match && setActive(3))}
        >
          <NavIcon active={active === 3}>
            <CalendarIcon />
          </NavIcon>
        </NavLink>
        <NavLink
          to="/pomodoro"
          isActive={(match) => (match && setActive(4))}
        >
          <NavIcon active={active === 4}>
            <PomodoroIcon />
          </NavIcon>
        </NavLink>
        <NavLink
          to="/tasks"
          isActive={(match) => (match && setActive(0))}
        >
          <NavIcon active={active === 0}>
            <TaskIcon />
          </NavIcon>
        </NavLink>
      </LinksContainer>
      <LogoutContainer>
        <NavLink to="/">
          <NavIcon>
            <LogoutIcon
              onClick={onLogout}
            />
          </NavIcon>
        </NavLink>
      </LogoutContainer>
    </>
  );
};

export const Navigation = ({ setActive, active }) => (
  <NavContainer>
    {window.innerWidth >= 900
      ? <VerticalNav setActive={setActive} active={active} />
      : <HorizontalNav setActive={setActive} active={active} />}
  </NavContainer>
);

Navigation.propTypes = {
  setActive: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired,
};

VerticalNav.propTypes = {
  setActive: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired,
};

HorizontalNav.propTypes = {
  setActive: PropTypes.func.isRequired,
  active: PropTypes.number.isRequired,
};
