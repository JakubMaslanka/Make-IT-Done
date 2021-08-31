/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/named */
import React from 'react';
import styled from 'styled-components';

const Projects = () => (
  <div>
    <Header>
      <h4>Projects:</h4>
    </Header>
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

export default Projects;
