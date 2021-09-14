import styled, { keyframes } from 'styled-components';

export const slideInAnimation = keyframes`
0% {
  opacity: 0%;
  transform: translateY(-100%)
}
50%{
  opacity: 0%;
}
100% {
  opacity: 100%;
  transform: translateX(0%)
}`;

export const ListContainer = styled.div`
  margin-top: 60px;`;

export const TitleEditor = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  input{
    padding: 0px;
    margin: 0px;
    font-size: 1.3rem;
    font-weight: 400;
    color: white;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    background: transparent;
  }`;

export const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 400;
  margin: 0px;
  cursor: pointer;`;

export const TasksListBackground = styled.div`
  animation: ${slideInAnimation} .5s;
  width: 100%;
  margin-top: -60px;
  ${({ color }) => `background-color: ${color.split(',')[0]}, 75%, 29%);`}
  border-radius: 20px;`;

export const Description = styled.div`
  padding: 0px 20px 20px 20px;
  font-size: .95rem;
  font-weight: 200;`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px 0px 20px;
  svg{
      cursor: pointer;
      width: 32px;
      height: 32px;          
  }`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  color: #EEEEEE;
  z-index: 1;
  ${({ color }) => `background-color: ${color};`}
  box-shadow: 4px 4px 4px 0px #00000040;
  border-radius: 20px;`;

export const TasksCountContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(0px, -10px);
  ${({ color }) => `background-color: ${color.split(',')[0]}, 75%, 29%);`}
  padding: 10px;
  border-radius: 50%;
  color: white;
  font-size: 12px;
  line-height: 7px;`;
