/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import styled from 'styled-components';

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
        <StyledInput type="text" ref={tasksTitle} />
        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: nowrap;
`;

const StyledInput = styled.input`
  background: none;
  border: none;
  border-bottom: 2px solid #128069;
  outline: none;
  color: white;
  font-size: 1.1rem;
  width: 100%;
`;

const StyledButton = styled.button`
  background: none;
  border: 2px solid #128069;
  margin-bottom: 1px;
  font-size: 1.1rem;
  color: #128069;
  &:hover{
    color: #3F5873;
    background: #1BBC9B;
    border: 2px solid #3F5873;
    transition: all 0.2s ease;
  }
    
`;

export default TasksCreator;
