/* eslint-disable import/no-cycle */
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { ReactComponent as DoneIcon } from '../components/utilities/assets/done_icon.svg';

const Landing = () => {
  const history = useHistory();

  return (
    <Container>
      <h1>make****done</h1>
      <ListItem>
        Pomodoro Technique
        <DoneIcon fill="#FFFFFF" />
      </ListItem>
      <ListItem>
        Time Management
        <DoneIcon fill="#FFFFFF" />
      </ListItem>
      <ListItem>
        Task List
        <DoneIcon fill="#FFFFFF" />
      </ListItem>
      <ButtonsContainer>
        <Button type="button" onClick={() => history.replace('/login')}>Try it out!</Button>
        <Link href="https://github.com/JakubMaslanka/Make-IT-Done">Source Code</Link>
      </ButtonsContainer>
    </Container>
  );
};

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #2D3E50;
    font-family: Lato;
    h1{
      font-size: 3.75rem;
      color: white;
      font-weight: 200;
      border-bottom: 1px solid white;
      padding-bottom: 30px;
      margin-bottom: 10px;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }`;

const ListItem = styled.div`
    width: 39vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 2rem;
    display: flex;
    align-items: center;
    text-transform: uppercase;`;

const ButtonsContainer = styled.div`
    width: 39vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 50px;
    cursor: pointer;`;

const Button = styled.button`
      padding: 12px 20px;
      color: #1BBC9B;
      background: transparent;
      border: 5px solid #1BBC9B;
      border-radius: 5px;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
      font-size: 1.1rem;
      font-weight: 100;
      text-transform: uppercase;
      transition: all .15s ease;
      &:hover{
        color: #2D3E50;
        background: #1BBC9B;
      }`;

const Link = styled.a`
      text-decoration: none;
      padding: 12px 20px;
      color: #2D3E50;
      background: #AEAEAE;
      border: 5px solid #AEAEAE;
      border-radius: 5px;
      box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
      font-size: 1.1rem;
      font-weight: 300;
      text-transform: uppercase;
      transition: all .15s ease;
      &:hover{
        color: #AEAEAE;
        background: #2D3E50;
      }`;

export default Landing;
