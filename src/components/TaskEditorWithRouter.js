/* eslint-disable react/no-children-prop */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import {
  Route, Switch, useParams, useHistory,
} from 'react-router-dom';
import TaskEditor from './Tasks_List/TaskEditor';
import { TasksContext } from './context/TasksContext';

function TaskEditorWithRouter({ children, baseRoute }) {
  return (
    <>
      <Switch>
        <Route
          path={`/${baseRoute}/:id`}
          children={<Editor baseRoute={baseRoute} />}
        />
      </Switch>
      {children}
    </>
  );
}

const Editor = ({ baseRoute }) => {
  const { id } = useParams();
  const history = useHistory();
  const {
    tasks,
    editTask,
    removeTask,
  } = useContext(TasksContext);

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
};

export default TaskEditorWithRouter;
