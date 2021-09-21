import styled from 'styled-components';

export const Container = styled.div`
    max-width: 480px;
    width: 100%;
    margin: 20px auto;`;

export const TaskItem = styled.div`
    background-color: #2D3E50;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 15px;
    // width: 480px;
    border-radius: 4px;
    cursor: pointer;
    margin: 12px 8px;
    overflow-y: scroll;
    text-align: left;
    font-size: 16px;
    color: white;
    ${({ activeTaskBorder }) => (activeTaskBorder ? 'border-left: 6px solid #FE4D4C;' : 'border-left: 6px solid #2D3E50;')};
    svg{
    width: 32px;
    height: 32px;
        &:hover{
        fill: #1BBC9B;
        }
    }`;

export const TaskContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;`;

export const H3 = styled.h3`
    font-weight: bold;
    width: 90%;
    line-height: 1.5em;
    ${({ isCompleted }) => (isCompleted ? 'text-decoration: line-through;' : '')};`;
