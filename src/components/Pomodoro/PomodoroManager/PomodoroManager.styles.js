import styled from 'styled-components';

export const PomodoroTimerContainer = styled.div`
    color:#c9ccea;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        font-size: 42px;
        margin-bottom: 3px;
    }`;

export const TimersList = styled.ul`
    list-style: none;
    display: flex;
    font-size: 16px;
    padding: 5px;
    background-color: #2D3E50;
    border-radius: 24px;
    color: #efefef;`;

export const CountdownContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 240px;
    width: 240px;
    border-radius: 50%;
    color:#efefef;
    background: #2D3E50;
    font-size: 56px;
    box-shadow: 6px 10px 2rem 1px rgba(0,0,0,.6);`;

export const Button = styled.button`
    color:#efefef;
    font-size: 13px;
    padding: 8px 20px;
    border: none;
    border-radius: 42px;
    margin: 4px;
    min-width: 80px;
    cursor: pointer;
    ${({ activeButton }) => {
    let backgroundColor = 'background-color: #2D3E50';
    switch (activeButton) {
      case 'work':
        backgroundColor = 'background-color: #FE4D4C';
        break;
      case 'short':
        backgroundColor = 'background-color: #1BBC9B';
        break;
      case 'long':
        backgroundColor = 'background-color: #28D1F8';
        break;
      default:
        break;
    }
    return backgroundColor;
  }};
    ${({ bigger }) => (bigger ? 'padding: 14px 32px;' : null)};`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px;
    svg{
        fill: #128069;
        padding: 0px 24px;
        width: 28px;
        height: 28px;
        &:hover{
            transition: fill 0.1s ease;
            fill: #1BBC9B;
        }
    }`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 22px;
    font-weight: 300;`;
