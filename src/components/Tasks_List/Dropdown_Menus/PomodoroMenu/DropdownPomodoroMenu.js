import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as TrashIcon } from '../../../utilities/assets/trash_icon.svg';
import { ReactComponent as ArrowUp } from '../../../utilities/assets/arrow_up_icon.svg';
import { ReactComponent as ArrowDrop } from '../../../utilities/assets/arrow_down_icon.svg';

import {
  DropdownMenuContainer,
  LabelContainer,
  MenuContainer,
  MenuItem,
  CustomViewContainer,
  ControlsContainer,
  Button,
} from './DropdownPomodoroMenu.styles';

import { useClickOutsideHook } from '../../../utilities/useClickOutsideHook';

export function DropdownPomodoroMenu({
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
        <span>{label}</span>
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
            <ArrowUp
              onClick={() => setCustomPomodorosCounts(
                (prevState) => prevState + 1,
              )}
            />
            <p>{`${customPomodorosCounts} Pomodoros`}</p>
            <ArrowDrop
              onClick={() => setCustomPomodorosCounts(
                (prevState) => (
                  prevState > 1 ? prevState - 1 : prevState
                ),
              )}
            />
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

DropdownPomodoroMenu.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string,
  editorStyle: PropTypes.bool,
  onPomodorosPick: PropTypes.func.isRequired,
  isPomodoroSet: PropTypes.oneOfType([
    PropTypes.shape({
      done: PropTypes.number,
      est: PropTypes.number,
    }),
    PropTypes.number,
  ]),
};

DropdownPomodoroMenu.defaultProps = {
  label: '',
  editorStyle: false,
  isPomodoroSet: null,
};
