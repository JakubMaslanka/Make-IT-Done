import React from 'react';
import PropTypes from 'prop-types';
import {
  ConfirmOverlay,
  DialogContainer,
  ButtonsContainer,
  Button,
} from './Dialog.styles';

export const Dialog = ({
  isAlertType, title, message, accept, cancel,
}) => (
  <ConfirmOverlay>
    <DialogContainer>
      <h2>{title}</h2>
      <p>{message}</p>
      <ButtonsContainer>
        {!isAlertType && <Button type="button" onClick={cancel}>Cancel</Button>}
        <Button id="acceptButton" type="button" submit onClick={accept}>Accept</Button>
      </ButtonsContainer>
    </DialogContainer>
  </ConfirmOverlay>
);

Dialog.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  accept: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  isAlertType: PropTypes.bool,
};

Dialog.defaultProps = {
  title: 'Confirm Prompt',
  message: 'Are you sure?',
  isAlertType: false,
};
