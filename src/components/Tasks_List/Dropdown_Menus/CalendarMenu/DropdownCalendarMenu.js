import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { ReactComponent as TrashIcon } from '../../../../icons/trash_icon.svg';
import { ReactComponent as DataPickUpIcon } from '../../../../icons/data_pickup_icon.svg';

import {
  MenuItem,
  MenuContainer,
  LabelContainer,
  DropdownMenuContainer,
} from './DropdownCalendarMenu.styles';

import { useClickOutsideHook } from '../../../../hooks';

export function DropdownCalendarMenu({
  icon, label, isOpen, onDatePick, editorStyle, deadline,
}) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(0);
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
    <DropdownMenuContainer id="setDate" ref={domNode} editorStyle={editorStyle}>

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
        <span>{label}</span>
      </LabelContainer>

      <MenuContainer heightIncrease={label ? -290 : -230} position={position}>
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
            {(label === moment(deadline).format('ddd, D MMMM')) && (
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

DropdownCalendarMenu.propTypes = {
  icon: PropTypes.element.isRequired,
  onDatePick: PropTypes.func.isRequired,
  isOpen: PropTypes.func.isRequired,
  label: PropTypes.string,
  editorStyle: PropTypes.bool,
  deadline: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.string,
  ]),
};

DropdownCalendarMenu.defaultProps = {
  label: '',
  deadline: null,
  editorStyle: false,
};
