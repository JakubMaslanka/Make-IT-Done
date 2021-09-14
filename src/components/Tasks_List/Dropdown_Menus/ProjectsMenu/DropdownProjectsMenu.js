import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { ReactComponent as TrashIcon } from '../../../../icons/trash_icon.svg';
import {
  MenuItem,
  MenuContainer,
  LabelContainer,
  NoProjectContainer,
  DropdownMenuContainer,
} from './DropdownProjectsMenu.styles';

import { useClickOutsideHook, useTasks } from '../../../../hooks';

export function DropdownProjectsMenu({
  icon, label, editorStyle, onProjectPick, selectedProject,
}) {
  const {
    projects,
  } = useTasks();

  const [open, setOpen] = useState(false);
  const history = useHistory();
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
        <span>{label}</span>
      </LabelContainer>

      <MenuContainer position={position}>
        {open && (projects.length >= 1 ? (
          <>
            {projects.map((project) => (

              <MenuItem
                key={project.id}
                onClick={() => {
                  onProjectPick({
                    title: project.title,
                    id: project.uniqueProjectId,
                  });
                  setOpen(false);
                }}
              >
                <p>{project.title}</p>
              </MenuItem>
            ))}
            {(selectedProject.id) && (
              <>
                <hr size="1" />
                <MenuItem
                  removeItem
                  onClick={() => {
                    onProjectPick({
                      title: null,
                      id: null,
                    });
                    setOpen(false);
                  }}
                >
                  <p>Delate Pomodoros</p>
                  <TrashIcon className="icon" />
                </MenuItem>
              </>
            )}
          </>
        ) : (
          <NoProjectContainer>
            <p>
              There is no project that you can make an assigned task.
              <br />
              Go and create one!
            </p>
            <button type="button" onClick={() => history.push('/projects')}>Create project</button>
          </NoProjectContainer>
        ))}
      </MenuContainer>
    </DropdownMenuContainer>
  );
}

DropdownProjectsMenu.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string,
  editorStyle: PropTypes.bool,
  onProjectPick: PropTypes.func.isRequired,
  selectedProject: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

DropdownProjectsMenu.defaultProps = {
  label: '',
  editorStyle: false,
};
