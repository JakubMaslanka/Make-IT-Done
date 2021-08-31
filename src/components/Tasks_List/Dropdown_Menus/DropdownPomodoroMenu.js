/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import React, { useState } from 'react';
import styled from 'styled-components';
import useClickOutsideHook from '../../utilities/useClickOutsideHook';
import { ReactComponent as TrashIcon } from '../../utilities/assets/trash_icon.svg';
import { ReactComponent as ArrowUp } from '../../utilities/assets/arrow_up_icon.svg';
import { ReactComponent as ArrowDrop } from '../../utilities/assets/arrow_down_icon.svg';

export default function DropdownPomodoroMenu({
  icon, label, editorStyle, onPomodorosPick, isPomodoroSet,
}) {
  const [open, setOpen] = useState(false);
  const [customPomodorosView, setCustomPomodorosView] = useState(false);
  const [customPomodorosCounts, setCustomPomodorosCounts] = useState(1);
  const [position, setPosition] = useState(0);
  const domNode = useClickOutsideHook(() => {
    setOpen(false);
    setCustomPomodorosView(false);
  });

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
          setOpen(!customPomodorosView && !open);
        }}
      >
        {icon}
        <p>{label}</p>
      </LabelContainer>

      <MenuContainer heightIncrease={label ? -235 : -175} position={position}>
        {open && (
          <>
            <MenuItem onClick={() => {
              onPomodorosPick(1);
              setOpen(false);
            }}
            >
              <p>1 Pomodoros</p>
              <p>(25min)</p>
            </MenuItem>
            <MenuItem onClick={() => {
              onPomodorosPick(4);
              setOpen(false);
            }}
            >
              <p>4 Pomodoros</p>
              <p>(2 hours)</p>
            </MenuItem>
            <hr size="1" />
            <MenuItem onClick={() => {
              setCustomPomodorosView((prevState) => !prevState);
              setOpen((prevState) => !prevState);
            }}
            >
              <p>Setup your own</p>
            </MenuItem>
            {(isPomodoroSet) && (
            <>
              <hr size="1" />
              <MenuItem
                removeItem
                onClick={() => {
                  onPomodorosPick(null);
                  setOpen(false);
                }}
              >
                <p>Delate Pomodoros</p>
                <TrashIcon className="icon" />
              </MenuItem>
            </>
            )}
          </>
        )}
        {customPomodorosView && (
          <CustomViewContainer>
            <ArrowUp onClick={() => setCustomPomodorosCounts((prevState) => prevState + 1)} />
            <p>{`${customPomodorosCounts} Pomodoros`}</p>
            <ArrowDrop onClick={() => setCustomPomodorosCounts((prevState) => (prevState > 1 ? prevState - 1 : prevState))} />
            <ControlsContainer>
              <Button
                saveButtonType
                onClick={() => {
                  onPomodorosPick(customPomodorosCounts);
                  setCustomPomodorosCounts(1);
                  setCustomPomodorosView((prevState) => !prevState);
                }}
              >
                Save

              </Button>
              <Button
                onClick={() => {
                  setCustomPomodorosView((prevState) => !prevState);
                  setOpen((prevState) => !prevState);
                }}
              >
                Cancel

              </Button>
            </ControlsContainer>
          </CustomViewContainer>
        )}
      </MenuContainer>
    </DropdownMenuContainer>
  );
}

const CustomViewContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    svg{
      width: 55px;
    height: 55px;
    }
    padding-top: 10px;
    user-select: none;
    p{
      font-size: 18px;
      font-weight: 500;
      margin: 5px auto;
    }
`;

const ControlsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 10px;
`;

const Button = styled.button`
      padding: 10px;
      width: 106px;
      cursor: pointer;
      border: none;
      font-weight: 700;
      background-color: #EEEEEE;
      color: #444444;
      &:hover{
        transition: all 0.2s ease;
        background-color: #DDDDDD;
        color: #000000;
      }
    ${(props) => (props.saveButtonType && (
    `background-color: #128069;
      color: #DDDDDD;
      &:hover{
        transition: all 0.2s ease;
        background-color: #1BBC9B;
        color: #FFFFFF;
      }`
  )
  )}

`;

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
    : (`top: ${props.heightIncrease}px;`))}
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
  ${(props) => (props.removeItem ? `
  color: #F00000;
  .icon {
    padding: 0px;
    fill: #F00000;
    width: 25px;
    height: 25px;
    &:hover{
      fill: #F00000;
  }
  ` : null)}
  &:hover{
    background: #EFEFEF;
  }
`;
