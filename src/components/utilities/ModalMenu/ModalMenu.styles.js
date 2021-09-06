import styled from 'styled-components';

export const ModalMenuContainer = styled.div`
    position: absolute;
    z-index: 20;
    padding: 20px;
    background-color: #2D3E50;
    color: white;
    box-shadow: 6px 6px 20px 0px black;
    border-radius: 5px;
    display: flex;
    text-align: center;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;`;

export const ModalMenuHeader = styled.div`
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      align-content: space-between;
      text-align: left;
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
      }`;

export const ModalBackground = styled.div`
      top: 0px;
      left: 0px;
      z-index: 10;
      width: 100vw;
      height: 100vh;
      position: absolute;
      background-color: rgba(0,0,0,0.6);`;
