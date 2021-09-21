import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Dialog } from '../utils/Dialog';

export function useConfirm(callback, title, message, alertType) {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const confirmTrigger = () => setDialogOpen(true);

  const cancel = () => setDialogOpen(false);

  const accept = () => {
    callback();
    setDialogOpen(false);
  };

  const ConfirmDialog = () => createPortal(
    <Dialog
      isAlertType={alertType}
      title={title}
      message={message}
      accept={accept}
      cancel={cancel}
    />,
    document.body,
  );

  const ConfirmContainer = ({ children }) => (
    <>
      {children}
      {isDialogOpen && <ConfirmDialog />}
    </>
  );

  ConfirmContainer.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };

  ConfirmContainer.defaultProps = {
    children: React.createElement('div'),
  };

  return {
    confirmTrigger,
    ConfirmContainer,
    isDialogOpen,
  };
}

useConfirm.propTypes = {
  callback: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  alertType: PropTypes.bool,
};

useConfirm.defaultProps = {
  alertType: false,
};
