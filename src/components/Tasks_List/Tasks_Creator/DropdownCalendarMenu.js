/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import useClickOutsideHook from '../../utilities/useClickOutsideHook';
import { ReactComponent as TrashIcon } from '../../utilities/assets/trash_icon.svg';
import { ReactComponent as DataPickUpIcon } from '../../utilities/assets/data_pickup_icon.svg';

export default function DropdownCalendarMenu({
  icon, label, isOpen, onDatePick,
}) {
  const [open, setOpen] = useState(false);
  const domNode = useClickOutsideHook(() => setOpen(false));

  const datePick = (date) => {
    switch (date) {
      case 'today':
        onDatePick(moment());
        setOpen(false);
        break;
      case 'tomorrow':
        onDatePick(moment().add(1, 'days'));
        setOpen(false);
        break;
      case 'nextWeek':
        onDatePick(moment().add(1, 'weeks').startOf('isoWeek'));
        setOpen(false);
        break;
      case 'removeDate':
        onDatePick(null);
        setOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <DropdownMenuContainer ref={domNode}>

      <LabelContainer onClick={() => setOpen(!open)}>
        {icon}
        <p>{label}</p>
      </LabelContainer>

      <MenuContainer heightIncrease={label}>
        {open && (
          <>
            <MenuItem onClick={() => datePick('today')}>
              <p>Today</p>
              <p>{moment().format('ddd.')}</p>
            </MenuItem>
            <MenuItem onClick={() => datePick('tomorrow')}>
              <p>Tommorow</p>
              <p>{moment().add(1, 'days').format('ddd.')}</p>
            </MenuItem>
            <MenuItem onClick={() => datePick('nextWeek')}>
              <p>Next Week</p>
              <p>{moment().add(1, 'weeks').startOf('isoWeek').format('ddd.')}</p>
            </MenuItem>
            <hr size="1" />
            <MenuItem onClick={() => {
              isOpen(true);
              setOpen(false);
            }}
            >
              <p>Pickup the date</p>
              <DataPickUpIcon className="icon" />
            </MenuItem>
            {label && (
            <>
              <hr size="1" />
              <MenuItem removeItem onClick={() => datePick('removeDate')}>
                <p>Delate date</p>
                <TrashIcon className="icon" />
              </MenuItem>
            </>
            )}
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
    ${(props) => (props.heightIncrease ? 'top: -290px;' : 'top: -230px;')}
    width: 210px;
    transform: translateX(-35%);
    background-color: white;
    border-radius: 5%;
    overflow: hidden;
    hr {
      margin: 2px 0px;
      opacity: 60%;
    }
    .icon {
      padding: 0px;
      fill: #000;
      width: 25px;
      height: 25px;
      &:hover{
        fill: #000;
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
`;