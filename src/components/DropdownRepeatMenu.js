/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import useClickOutsideHook from '../utilities/useClickOutsideHook';

export default function DropdownRepeatMenu({
  icon, label,
}) {
  const [open, setOpen] = useState(false);
  const domNode = useClickOutsideHook(() => setOpen(false));

  return (
    <DropdownMenuContainer ref={domNode}>

      <LabelContainer onClick={() => setOpen(!open)}>
        {icon}
        <p>{label}</p>
      </LabelContainer>

      <MenuContainer>
        {open && (
          <>
            <MenuItem>
              <p>Option#1</p>
              <p>sub-text#1</p>
            </MenuItem>
            <MenuItem>
              <p>Option#3</p>
              <p>sub-text#2</p>
            </MenuItem>
            <MenuItem>
              <p>Option#3</p>
              <p>sub-text#3</p>
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
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; 
  width: 100%;
  color: #DDDDDD;
`;

const MenuContainer = styled.div`
    position: absolute;
    top: -170px;
    width: 210px;
    transform: translateX(-35%);
    background-color: white;
    border-radius: 5%;
    overflow: hidden;
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
