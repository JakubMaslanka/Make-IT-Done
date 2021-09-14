import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Navigation } from '../../components';
import { TaskEditorWithRouter } from '../../utils';

export const Layout = ({ children, baseRoute }) => {
  const [activeIcon, setActiveIcon] = useState(2);
  return (
    <>
      <TaskEditorWithRouter baseRoute={baseRoute}>
        {children}
      </TaskEditorWithRouter>
      <Navigation setActive={setActiveIcon} active={activeIcon} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  baseRoute: PropTypes.string.isRequired,
};
