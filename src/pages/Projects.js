import React from 'react';
import styled from 'styled-components';
import { ProjectManager, Navigation } from '../components';

import { TaskEditorWithRouter } from '../components/utilities/TaskEditorWithRouter';

const Projects = () => (
  <>
    <TaskEditorWithRouter baseRoute="projects">
      <Header>
        <h4>Projects:</h4>
      </Header>
      <ProjectManager />
    </TaskEditorWithRouter>
    <Navigation />
  </>
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

export default Projects;
