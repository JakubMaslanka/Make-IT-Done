import styled, { keyframes } from 'styled-components';
import Calendar from 'react-calendar';

export const slideInAnimation = keyframes`
  0% {
    transform: translateX(100%)
  }
  100% {
    transform: translateX(0%)
  }
`;

export const DatePicker = styled(Calendar)`
  position: absolute;
  border-radius: 2%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 80px;
  background-color: #3F5873;
  padding: 10px;
  border-radius: 10px;
  border-bottom: .3px solid rgba(255,255,255, .3);
    input {
      border: none;
      background: none;
      outline: none;
      font-size: 18px;
      font-weight: 600;
      color: white;
    }
    svg{
      width: 30px;
      height: 30px;
      margin 0px 5px;
      cursor: pointer;
      &:hover{
        transition: all 0.2s ease;
        fill: #1BBC9B;
      }
    }
`;

export const EditorContainer = styled.div`
  position: fixed;
  background: #2D3E50;
  top: 0;
  right: 0;
  box-shadow: -15px 0px 25px 0px rgba(0,0,0,.5);
  height: 100%;
  z-index: 10;
  overflow-x: hidden;
  padding: 50px 20px 0px 20px;
  transition: 0.5s;
  animation: ${slideInAnimation} .5s;
  display: flex;
  flex-direction: column;
  }
`;

export const Textarea = styled.textarea`
  height: 100px;
  outline: none;
  border: none;
  background: rgba(63, 88, 115, 1);
  padding: 10px;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  resize: none;
  ::placeholder {
    color: white;
    font-size: 1em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
`;

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 54px;
  width: 342px;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: white;
  font-weight: 400;
  border-top: .3px solid rgba(255,255,255, .3);
  p{
    opacity: 80%;
  }
  svg{
    width: 30px;
    height: 30px;
    cursor: pointer;
    &:hover{
      transition: fill 0.2s ease;
      fill: #1BBC9B;
    }
  }
`;

export const GreyedOutBackground = styled.div`
      top: 0px;
      left: 0px;
      z-index: 9;
      width: 100vw;
      height: 100vh;
      position: absolute;
      background-color: rgba(0,0,0,0.6);`;
