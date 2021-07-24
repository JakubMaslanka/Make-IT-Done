/* eslint-disable react/prop-types */
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

export default function DropdownMenu({ icon, children }) {
  const [open, setOpen] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    const onCloseHandler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onCloseHandler);

    return () => (document.removeEventListener('mousedown', onCloseHandler));
  });

  return (
    <div ref={menuRef}>
      <IconContainer
        onClick={() => setOpen(!open)}
      >
        {icon}
      </IconContainer>
      <MenuContainer>
        {open && children}
      </MenuContainer>
    </div>
  );
}

const IconContainer = styled.div``;

const MenuContainer = styled.div`
    position: absolute;
    top: -240px;
    width: 210px;
    transform: translateX(-35%);
    background-color: white;
    border-radius: 5%;
    overflow: hidden;
  `;
