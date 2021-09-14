import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as DoneIcon } from '../icons/done_icon.svg';

import {
  LandingLink,
  LandingButton,
  LandingListItem,
  LandingContainer,
  LandingButtonsContainer,
} from './pages.styles';

export const Landing = () => {
  const history = useHistory();

  return (
    <LandingContainer>
      <h1>make****done</h1>
      <LandingListItem>
        Pomodoro Technique
        <DoneIcon fill="#FFFFFF" />
      </LandingListItem>
      <LandingListItem>
        Time Management
        <DoneIcon fill="#FFFFFF" />
      </LandingListItem>
      <LandingListItem>
        Task List
        <DoneIcon fill="#FFFFFF" />
      </LandingListItem>
      <LandingButtonsContainer>
        <LandingButton type="button" onClick={() => history.replace('/login')}>Try it out!</LandingButton>
        <LandingLink href="https://github.com/JakubMaslanka/Make-IT-Done">Source Code</LandingLink>
      </LandingButtonsContainer>
    </LandingContainer>
  );
};
