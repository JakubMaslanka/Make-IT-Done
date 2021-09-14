import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { ReactComponent as TrashIcon } from '../../../icons/trash_icon.svg';

import {
  Input,
  Button,
  Circle,
  Textarea,
  FormContainer,
  ButtonsContainer,
  ColorPickerContainer,
} from './ProjectCreator.styles';
import { useTasks } from '../../../hooks';

export function ProjectCreator({
  confirmTrigger, closeMenu, projectToEdit,
}) {
  const { handleProjectCreate, handleProjectEdit } = useTasks();
  const [title, setTitle] = useState(projectToEdit ? projectToEdit.title : '');
  const [description, setDescription] = useState(projectToEdit ? projectToEdit.description : '');
  const [openColorPicker, setColorPicker] = useState(false);
  const [color, setColor] = useState(projectToEdit ? projectToEdit.projectColor : null);

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    if (projectToEdit) {
      handleProjectEdit(projectToEdit.id,
        {
          ...projectToEdit, title, description, projectColor: color,
        });
    } else {
      const newProject = {
        id: new Date().getMilliseconds(),
        title,
        description,
        projectColor: color || `hsl(${Math.floor(Math.random() * (360 - 1) + 1)}, 75%, 42%)`,
        uniqueProjectId: uuidv4(),
      };
      handleProjectCreate(newProject);
    }
    closeMenu();
  };

  const setProjectColor = (hsl) => {
    setColor(`hsl(${hsl}, 75%, 42%)`);
    setColorPicker(false);
  };

  return (
    <FormContainer onSubmit={handleProjectSubmit}>
      <Input required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Project title" type="text" />
      <Textarea maxLength="100" value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Add a description" />
      {openColorPicker && (
      <ColorPickerContainer>
        <Circle hslColor={360} onClick={() => setProjectColor(360)} />
        <Circle hslColor={35} onClick={() => setProjectColor(35)} />
        <Circle hslColor={120} onClick={() => setProjectColor(120)} />
        <Circle hslColor={168} onClick={() => setProjectColor(168)} />
        <Circle hslColor={200} onClick={() => setProjectColor(200)} />
        <Circle hslColor={230} onClick={() => setProjectColor(230)} />
        <Circle hslColor={280} onClick={() => setProjectColor(280)} />
        <Circle hslColor={320} onClick={() => setProjectColor(320)} />
      </ColorPickerContainer>
      )}
      <ButtonsContainer>
        {projectToEdit && (
        <Button
          type="button"
          danger
          onClick={() => {
            confirmTrigger();
            closeMenu();
          }}
        >
          <TrashIcon fill="#5c1320" />
          Delete
        </Button>
        )}
        <Button
          type="button"
          selectedColor={color || 'hsl(167, 75%, 29%)'}
          onClick={() => setColorPicker((prevState) => !prevState)}
        >
          Pick a color
        </Button>
        <Button type="submit">Submit</Button>
      </ButtonsContainer>
    </FormContainer>
  );
}

ProjectCreator.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  confirmTrigger: PropTypes.func,
  projectToEdit: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    projectColor: PropTypes.string,
    id: PropTypes.number,
  }),
};

ProjectCreator.defaultProps = {
  projectToEdit: null,
  confirmTrigger: null,
};
