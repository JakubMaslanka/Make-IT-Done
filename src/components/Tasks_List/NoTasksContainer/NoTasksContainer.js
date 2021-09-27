import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as TaskNotFound } from '../../../icons/task_not_found_icon.svg';
import { ReactComponent as TaskNotCreate } from '../../../icons/task_not_found_2_icon.svg';
import { PositionContainer, Container } from './NoTasksContainer.styles';

export const NoTasksContainer = ({ allTaskView }) => (
  <PositionContainer>
    <Container biggerSvg={allTaskView}>
      {allTaskView
        ? (
          <>
            <TaskNotFound />
            <h4>We searched everywhere, but we couldn&apos;t find the content you looking for.</h4>
          </>
        )
        : (
          <>
            {window.innerHeight > 650 && <TaskNotCreate />}
            <h3>There aren&apos;t tasks waiting for you.</h3>
            <span>You can always add a task to your Home view by marking it with a star icon.</span>
          </>
        )}
    </Container>
  </PositionContainer>
);

NoTasksContainer.propTypes = {
  allTaskView: PropTypes.bool,
};

NoTasksContainer.defaultProps = {
  allTaskView: false,
};
