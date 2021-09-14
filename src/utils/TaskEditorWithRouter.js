import React from 'react';
import PropTypes from 'prop-types';
import {
  Route, Switch, useParams, useHistory,
} from 'react-router-dom';
import { TaskEditor } from '../components';
import { useTasks } from '../hooks';

export function TaskEditorWithRouter({ children, baseRoute }) {
  return (
    <>
      <Switch>
        <Route path={`/${baseRoute}/:id`}>
          <Editor baseRoute={baseRoute} />
        </Route>
      </Switch>
      {children}
    </>
  );
}

function Editor({ baseRoute }) {
  const { tasks, handleTaskEdit, handleRemoveEdit } = useTasks();
  const history = useHistory();
  const { id } = useParams();
  const [taskToEdit] = tasks.filter((task) => task.id === parseInt(id, 10));

  return (
    <>
      {taskToEdit
        ? (
          <>
            <TaskEditor
              id={parseInt(id, 10)}
              taskToEdit={taskToEdit}
              onEdit={handleTaskEdit}
              onDelete={handleRemoveEdit}
              onClose={() => history.push(`/${baseRoute}`)}
            />
          </>
        ) : history.push(`/${baseRoute}`)}
    </>
  );
}

TaskEditorWithRouter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  baseRoute: PropTypes.string.isRequired,
};

Editor.propTypes = {
  baseRoute: PropTypes.string.isRequired,
};
