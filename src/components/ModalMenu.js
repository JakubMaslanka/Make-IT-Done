/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import useClickOutsideHook from './utilities/useClickOutsideHook';
import { ReactComponent as CloseIcon } from './utilities/assets/close_icon.svg';

export default function ModalMenu({
  onClose, title, children,
}) {
  const domNode = useClickOutsideHook(onClose);

  return (
    <>
      <ModalMenuContainer ref={domNode}>
        <ModalMenuHeader>
          <p>{title}</p>
          <CloseIcon onClick={onClose} />
        </ModalMenuHeader>
        {children}
      </ModalMenuContainer>
      <ModalBackground />
    </>
  );
}

const ModalMenuContainer = styled.div`
    position: absolute;
    z-index: 20;
    padding: 20px;
    background-color: #2D3E50;
    color: white;
    box-shadow: 6px 6px 20px 0px black;
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
