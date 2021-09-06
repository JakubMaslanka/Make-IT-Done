import styled from 'styled-components';

export const NoTasksContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin: 20px;
    p {
    margin: 5px;
    }`;

export const TextInput = styled.input`
    background: none;
    border: none;
    padding: 10px;
    outline: none;
    color: white;
    font-size: 1.2rem;
    width: 100%;`;

export const SubmitButton = styled.button`
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
    }`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #2D3E50;
    border-bottom: 1px solid #98a0a6;`;

export const TasksContainer = styled.div`
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
    }`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;`;

export const Title = styled.div`
    h3{
    margin: 7.5px 0px;
    font-size: 1.28rem;
    color: #FFFFFF;
    ${({ isCompleted }) => (isCompleted ? 'text-decoration: line-through;' : '')};}`;
