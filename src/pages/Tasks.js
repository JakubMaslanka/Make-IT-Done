/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/named */
import React from 'react';
import styled from 'styled-components';
import TaskManager from '../components/Tasks_List/TaskManager';
import TaskEditorWithRouter from '../components/TaskEditorWithRouter';

const Tasks = () => (
  <div>
    <TaskEditorWithRouter baseRoute="tasks">
      <Header>
        <h4>All tasks:</h4>
      </Header>
      <TaskManager withSearchBar height={window.innerHeight - 260} />
    </TaskEditorWithRouter>
  </div>
);

const Header = styled.div`
  margin: 10px 20px;
  color: #FFFFFF;
  font-family: Roboto;
  line-height: 70px;
  h4{
    font-size: 22px;
    font-weight: 350;
    margin: 0px;
  }
`;

export default Tasks;
