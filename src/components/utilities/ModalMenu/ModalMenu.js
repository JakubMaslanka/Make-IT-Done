import React from 'react';
import PropTypes from 'prop-types';
import { useClickOutsideHook } from '../useClickOutsideHook';
import { ReactComponent as CloseIcon } from '../assets/close_icon.svg';
import {
  ModalMenuContainer,
  ModalMenuHeader,
  ModalBackground,
} from './ModalMenu.styles';

export function ModalMenu({
  onClose, title, children,
}) {
  const domNode = useClickOutsideHook(onClose);

  return (
    <>
      <ModalMenuContainer ref={domNode}>
        <ModalMenuHeader>
          <p>{title}</p>
          <CloseIcon onClick={onClose} />
        </ModalMenuHeader>
        {children}
      </ModalMenuContainer>
      <ModalBackground />
    </>
  );
}

ModalMenu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
};

ModalMenu.defaultProps = {
  title: 'Modal Menu',
};
