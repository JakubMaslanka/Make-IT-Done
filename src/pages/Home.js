/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/named */
import React from 'react';
import styled from 'styled-components';
import TaskManager from '../components/Tasks_List/TaskManager';
import TaskEditorWithRouter from '../components/TaskEditorWithRouter';

const date = new Date();
const Home = () => (
  <TaskEditorWithRouter baseRoute="home">
    <Header>
      <p>
        {date.toDateString()}
      </p>
      <h2>Welcome back,</h2>
      <h1>username!</h1>
      <h5>Your&apos;s taks for today:</h5>
    </Header>
    <TaskManager height={window.innerHeight - 425} />
  </TaskEditorWithRouter>
);

const Header = styled.div`
  margin: 0px 20px;
  color: #FFFFFF;
  font-family: Roboto;
  line-height: 70px;
  p {
    font-size: 20px;
    font-weight: 200;
    line-height: 26px;
    opacity: 88%;
    margin-bottom: 0px;
  }
  h2{
    font-size: 32px;
    font-style: normal;
    font-weight: 300;
    margin: 0px;
  }
  h1{
    font-size: 40px;
    font-weight: 500;
    margin: 0px;
    transform: translateY(-30px);
  }
  h5{
    font-size: 22px;
    font-weight: 250;
    margin: 0px;
  }
`;

export default Home;
