/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import useClickOutsideHook from '../../utilities/useClickOutsideHook';

export default function DropdownPomodoroMenu({
  icon, label, editorStyle,
}) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(0);
  const domNode = useClickOutsideHook(() => setOpen(false));

  return (
    <DropdownMenuContainer editorStyle={editorStyle} ref={domNode}>

      <LabelContainer
        editorStyle={editorStyle}
        onClick={(e) => {
          if (editorStyle) {
            setPosition({
              fromTop: e.pageY,
              fromRight: (window.innerWidth - e.pageX) - 210,
            });
          }
          setOpen(!open);
        }}
      >
        {icon}
        <p>{label}</p>
      </LabelContainer>

      <MenuContainer position={position}>
        {open && (
          <>
            <MenuItem>
              <p>1 Pomodoros</p>
              <p>(25min)</p>
            </MenuItem>
            <MenuItem>
              <p>4 Pomodoros</p>
              <p>(2 hours)</p>
            </MenuItem>
            <hr size="1" />
            <MenuItem>
              <p>Setup your own</p>
            </MenuItem>
          </>
        )}
      </MenuContainer>

    </DropdownMenuContainer>
  );
}

const DropdownMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${(props) => (props.editorStyle && (
    `display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
    background: rgba(63, 88, 115, 1);
    padding: 0px 15px;
    border-radius: 10px;
    color: white;
    margin-bottom: 25px;
    cursor: pointer;
    &:hover{
      transition: background 0.2s ease;
      background: rgba(63, 88, 115, .6);
    }
    svg{
      width: 24px;
      height: 24px;
      margin-right: 10px;
      &:hover{
        transition: all 0.2s ease;
        fill: #1BBC9B;
      }
    }`)
  )}
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  ${(props) => (props.editorStyle ? 'justify-content: flex-start;' : 'justify-content: center;')}
  align-items: center; 
  width: 100%;
  color: #DDDDDD;
`;

const MenuContainer = styled.div`
    position: absolute;
    ${(props) => (props.position
    ? (`top: ${props.position.fromTop}px; 
        right: ${props.position.fromRight - 75}px;`)
    : ('top: -175px;'))}
    width: 210px;
    transform: translateX(-35%);
    background-color: white;
    border-radius: 5%;
    overflow: hidden;
    color: black;
    hr {
        margin: 2px 0px;
        opacity: 60%;
      }
  `;

const MenuItem = styled.li`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.5;
  padding: .8rem;
  cursor: pointer;
  p:nth-child(2){
    opacity: 45%;
  }
  &:hover{
    background: #EFEFEF;
  }
`;
