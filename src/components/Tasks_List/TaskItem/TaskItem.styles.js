import styled from 'styled-components';

export const TaskContainer = styled.div`
    ${({ backgroundColor }) => (backgroundColor
    ? `background-color: ${backgroundColor};`
    : 'background-color: #2D3E50;')}
    border-radius: 20px;
    margin: 25px 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 4px 4px 4px 0px #00000040;
    font-family: Segoe UI;
    ${({ isCompleted }) => (isCompleted && 'opacity: 70%')};
    svg{
    width: 36px;
    height: 36px;
    margin 0px 25px 0px 15px;
    cursor: pointer;
    }`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    h3{
    margin: 7.5px 0px;
    font-size: 1.28rem;
    color: #FFFFFF;
    ${({ isCompleted }) => (isCompleted && (`
    text-decoration: line-through;
    color: #CCCCCC;
    `))}
    }
    ${({ areDetailsSet }) => (areDetailsSet ? (`
    h3{
        margin: 10px 0px 0px 0px;
    }
    `) : 'margin: 10px 0px;')}`;

export const TaskDetails = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    h3{
        margin: 10px 0px 0px 0px;
    }
    p{
        display: flex;
        flex-direction: row;
        margin: 0px 0px 10px 0px;
        font-size: .85rem;
        ${({ smallerScreen }) => (smallerScreen && 'font-size: 0px;')};
        ${({ brighter }) => (brighter ? 'color: #DDDDDD;' : 'color: #AFAFAF;')};
    svg {
        margin: 3px 4px 0px 0px;
        width: 14px;
        height: 14px;
        ${({ brighter }) => (brighter ? 'fill: #DDDDDD;' : 'fill: #AFAFAF;')};
    }
    }`;
