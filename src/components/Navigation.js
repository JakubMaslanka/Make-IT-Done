import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <NavLink
        to="/"
        exact
        activeClassName="active"
      >
        Home
      </NavLink>
      <NavLink
        to="/tasks"
        activeClassName="active"
      >
        Task List
      </NavLink>
      <NavLink
        to="/calendar"
        activeClassName="active"
      >
        Calendar
      </NavLink>
      <NavLink
        to="/pomodoro"
        activeClassName="active"
      >
        Pomodoro
      </NavLink>
    </>
  );
}

export default Navigation;
