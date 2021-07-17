/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as PublishIcon } from '../utilities/assets/publish_black_24dp.svg';

function TasksCreator({ onCreate }) {
  const tasksTitle = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({
      id: new Date().getMilliseconds(),
      title: tasksTitle.current.value,
      timeStump: new Date(),
    });
    tasksTitle.current.value = '';
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledButton type="submit"><PublishIcon /></StyledButton>
        <StyledInput required placeholder="Add new task" type="text" ref={tasksTitle} />
        {/* <ul>
          <li>when</li>
          <li>long</li>
          <li>many</li>
        </ul> */}
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  position: fixed;
  bottom: 0;
  margin: 0px 10px 85px 10px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 98%;
  flex-wrap: nowrap;
  background: #2D3E50;
  border-radius: 10px;
`;

const StyledInput = styled.input`
  background: none;
  border: none;
  padding: 10px;
  outline: none;
  color: white;
  font-size: 1.2rem;
  width: 100%;
`;

const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 10px;
  svg {
    fill: #128069;
    width: 32px;
    height: 32px;
  }
  &:hover{
    transition: all 0.2s ease;
    svg{
      fill: #1BBC9B;
    }
  }
    
`;

export default TasksCreator;
