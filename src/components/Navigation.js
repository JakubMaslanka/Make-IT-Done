/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
          <StyledSvg className={activeLinkIdx === 0 ? 'active' : ''} xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <g><path d="M0,0h24v24H0V0z" fill="none" /></g>
            <g><g><path d="M18,4v5H6V4H18z M18,2H6C4.9,2,4,2.9,4,4v5c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C20,2.9,19.1,2,18,2z M18,15v5H6v-5H18z M18,13H6c-1.1,0-2,0.9-2,2v5c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-5C20,13.9,19.1,13,18,13z" /></g></g>
          </StyledSvg>
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
          <StyledSvg className={activeLinkIdx === 1 ? 'active' : ''} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 3H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 6h-3.14c-.47 0-.84.33-.97.78C14.53 11.04 13.35 12 12 12s-2.53-.96-2.89-2.22c-.13-.45-.5-.78-.97-.78H5V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v3zm-3.13 7H20c.55 0 1 .45 1 1v2c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-2c0-.55.45-1 1-1h4.13c.47 0 .85.34.98.8.35 1.27 1.51 2.2 2.89 2.2s2.54-.93 2.89-2.2c.13-.46.51-.8.98-.8z" />
          </StyledSvg>
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
          <StyledSvg className={activeLinkIdx === 2 ? 'active' : ''} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
          </StyledSvg>
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
          <StyledSvg className={activeLinkIdx === 3 ? 'active' : ''} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M16 13h-3c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm0-10v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-1V3c0-.55-.45-1-1-1s-1 .45-1 1zm2 17H6c-.55 0-1-.45-1-1V9h14v10c0 .55-.45 1-1 1z" />
          </StyledSvg>
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
          <StyledSvg className={activeLinkIdx === 4 ? 'active' : ''} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M14.94 10.11l-4.4 4.42-1.6-1.6c-.29-.29-.77-.29-1.06 0-.29.29-.29.77 0 1.06L10 16.11c.29.29.77.29 1.06 0L16 11.17c.29-.29.29-.77 0-1.06-.29-.29-.77-.29-1.06 0zm6.24-5.1L18.1 2.45c-.42-.35-1.05-.3-1.41.13-.35.42-.29 1.05.13 1.41l3.07 2.56c.42.35 1.05.3 1.41-.13.36-.42.3-1.05-.12-1.41zM4.1 6.55l3.07-2.56c.43-.36.49-.99.13-1.41-.35-.43-.98-.48-1.4-.13L2.82 5.01c-.42.36-.48.99-.12 1.41.35.43.98.48 1.4.13zM12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
          </StyledSvg>
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
`;

const StyledSvg = styled.svg`
  fill: #128069;
  width: 28px;
  height: 28px;
  &.active{
    fill: #1BBC9B;
    width: 40px;
    height: 40px;
  }
`;

export default Navigation;
