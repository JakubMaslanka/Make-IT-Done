/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import useClickOutsideHook from '../utilities/useClickOutsideHook';
import { ReactComponent as PublishIcon } from '../utilities/assets/submit_icon.svg';
import { ReactComponent as CheckCircle } from '../utilities/assets/check_circle_icon.svg';
import { ReactComponent as UncheckCircle } from '../utilities/assets/uncheck_circle_icon.svg';
import { ReactComponent as CloseIcon } from '../utilities/assets/close_icon.svg';

export default function TasksModalMenu({
  tasksInSelectedDay, onCreate, onClose, selectedDay, onComplete,
}) {
  const tasksTitle = useRef(null);
  const domNode = useClickOutsideHook(onClose);

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    onCreate({
      id: new Date().getMilliseconds(),
      title: tasksTitle.current.value,
      isCompleted: false,
      deadline: selectedDay ? Date.parse(selectedDay) : null,
      timeStump: moment().format(),
    });
    tasksTitle.current.value = '';
  };

  return (
    <>
      <ModalMenu ref={domNode}>
        <ModalMenuHeader>
          <p>{`Tasks for ${selectedDay}`}</p>
          <CloseIcon onClick={onClose} />
        </ModalMenuHeader>

        {tasksInSelectedDay ? (tasksInSelectedDay.map((task) => (
          <TasksContainer key={task.id}>
            {task.isCompleted
              ? <CheckCircle onClick={() => onComplete(task.id)} fill="#1BBC9B" />
              : <UncheckCircle onClick={() => onComplete(task.id)} fill="#128069" />}
            <Title isCompleted={task.isCompleted}>
              <h3>{(task.title.length > 18) ? `${task.title.substr(0, 18)}...` : task.title}</h3>
            </Title>
          </TasksContainer>
        ))) : (
          <NoTasksContainer>
            <p>Hey! 🖐</p>
            <p>Looks like you don&lsquo;t have any task for today!🥳</p>
            <p>You can always add one</p>
            <p>👇👇👇</p>
          </NoTasksContainer>
        )}
        <FormContainer onSubmit={handleTaskSubmit}>
          <SubmitButton type="submit">
            <PublishIcon />
          </SubmitButton>
          <TextInput required placeholder="Add new task" type="text" ref={tasksTitle} />
        </FormContainer>
      </ModalMenu>
      <ModalBackground />
    </>
  );
}

const ModalMenu = styled.div`
    position: absolute;
    z-index: 20;
    padding: 20px;
    background-color: #2D3E50;
    color: white;
    box-shadow: 0px 0px 2px black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    `;

const ModalBackground = styled.div`
      top: 0px;
      left: 0px;
      z-index: 10;
      width: 100vw;
      height: 100vh;
      position: absolute;
      background-color: rgba(0,0,0,0.6);`;

const ModalMenuHeader = styled.div`
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      align-content: space-between;
      svg{
          width: 32px;
          height: 32px;
          fill: #FFF;
          cursor: pointer;
      }
      p{
          margin-top: 10px;
          color: #fff;
          font-size: 1.3rem;
          font-weight: 400;
      }
`;

const NoTasksContainer = styled.div`
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: center;
      align-items: center;
      margin: 20px;
      p {
        margin: 5px;
      }
`;

const TextInput = styled.input`
      background: none;
      border: none;
      padding: 10px;
      outline: none;
      color: white;
      font-size: 1.2rem;
      width: 100%;
    `;

const SubmitButton = styled.button`
      background: none;
      border: none;
      padding: 10px;
      svg {
        fill: #128069;
        width: 32px;
        height: 32px;
        cursor: pointer;
      }
      &:hover{
        transition: all 0.2s ease;
        svg{
          fill: #1BBC9B;
        }
      }
    `;

const FormContainer = styled.form`
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background: #2D3E50;
      border-bottom: 1px solid #98a0a6;
    `;

const TasksContainer = styled.div`
    background-color: rgba(63, 88, 115, .5);
    border-radius: 5px;
    margin: 15px 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-y: scroll;
    svg{
        width: 32px;
        height: 32px;
        margin 0px 25px 0px 10px;
        cursor: pointer;
    }
`;

const Title = styled.div`
  h3{
    margin: 7.5px 0px;
    font-size: 1.28rem;
    color: #FFFFFF;
    ${(props) => (props.isCompleted ? 'text-decoration: line-through;' : '')};
  }`;