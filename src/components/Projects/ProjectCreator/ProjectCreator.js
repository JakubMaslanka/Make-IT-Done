import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { ModalMenu } from '../../utilities/ModalMenu';

import {
  ProjectCreatorButton,
  FormContainer,
  Input,
  Textarea,
  ColorPickerContainer,
  Circle,
  ButtonsContainer,
  Button,
} from './ProjectCreator.styles';

export function ProjectCreator({ projectCreate }) {
  const [modalmenuOpen, setModalmenuOpen] = useState(false);
  const [colorPicker, setColorPicker] = useState(false);
  const [projectColor, setProjectColor] = useState(null);
  const title = useRef(null);
  const description = useRef(null);

  const modalmenuToggle = () => setModalmenuOpen((prevState) => !prevState);
  const setColor = (hsl) => {
    setProjectColor(`hsl(${hsl}, 75%, 42%)`);
    setColorPicker(false);
  };

  const handleProjectCreate = (e) => {
    e.preventDefault();
    const newProject = {
      id: new Date().getMilliseconds(),
      title: title.current.value,
      description: description.current.value,
      projectColor: projectColor || `hsl(${Math.floor(Math.random() * (360 - 1) + 1)}, 75%, 42%)`,
      uniqueProjectId: uuidv4(),
    };
    projectCreate((prevState) => ([...prevState, newProject]));
    setProjectColor(null);
    modalmenuToggle();
  };

  return (
    <>
      <ProjectCreatorButton onClick={modalmenuToggle}>Add Project</ProjectCreatorButton>
      {modalmenuOpen && (
      <ModalMenu
        title="Add your project!"
        onClose={modalmenuToggle}
      >
        <FormContainer onSubmit={handleProjectCreate}>
          <Input required placeholder="Project title" type="text" ref={title} />
          <Textarea maxLength="100" ref={description} type="text" placeholder="Add a description" />
          {colorPicker && (
          <ColorPickerContainer>
            <Circle hslColor={360} onClick={() => setColor(360)} />
            <Circle hslColor={35} onClick={() => setColor(35)} />
            <Circle hslColor={120} onClick={() => setColor(120)} />
            <Circle hslColor={168} onClick={() => setColor(168)} />
            <Circle hslColor={200} onClick={() => setColor(200)} />
            <Circle hslColor={230} onClick={() => setColor(230)} />
            <Circle hslColor={280} onClick={() => setColor(280)} />
            <Circle hslColor={320} onClick={() => setColor(320)} />
          </ColorPickerContainer>
          )}
          <ButtonsContainer>
            <Button
              type="button"
              selectedColor={projectColor || 'hsl(167, 75%, 29%)'}
              onClick={() => setColorPicker((prevState) => !prevState)}
            >
              Pick a color
            </Button>
            <Button type="submit">Submit</Button>
          </ButtonsContainer>
        </FormContainer>
      </ModalMenu>
      )}
    </>
  );
}

ProjectCreator.propTypes = {
  projectCreate: PropTypes.func.isRequired,
};
