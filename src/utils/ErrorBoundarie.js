import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useConfirm } from '../hooks/useConfirm';

export function ErrorBoundarie({ children, error, onLogout }) {
  const {
    confirmTrigger,
    ConfirmContainer,
  } = useConfirm(
    onLogout,
    error && error.title,
    error && error.message,
    true,
  );

  useEffect(() => confirmTrigger(), []);

  return (
    <>
      {error ? (
        <ConfirmContainer />
      ) : children}
    </>
  );
}

ErrorBoundarie.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  error: PropTypes.shape({
    title: PropTypes.string,
    message: PropTypes.string,
  }),
  onLogout: PropTypes.func.isRequired,
};

ErrorBoundarie.defaultProps = {
  error: {
    title: 'Error',
    message: 'Look like something gone wrong.',
  },
};
