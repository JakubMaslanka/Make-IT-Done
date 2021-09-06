import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Route, Switch, useParams, useHistory,
} from 'react-router-dom';
import { TaskEditor } from '../Tasks_List/TaskEditor';
import { TasksContext } from '../context/TasksContext';

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

TaskEditorWithRouter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  baseRoute: PropTypes.string.isRequired,
};

function Editor({ baseRoute }) {
  const {
    tasks,
    editTask,
    removeTask,
  } = useContext(TasksContext);

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
              onEdit={editTask}
              onDelete={removeTask}
              onClose={() => history.push(`/${baseRoute}`)}
            />
          </>
        ) : history.push(`/${baseRoute}`)}
    </>
  );
}

Editor.propTypes = {
  baseRoute: PropTypes.string.isRequired,
};
