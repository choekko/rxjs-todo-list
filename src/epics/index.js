import { combineEpics } from 'redux-observable';
import { addTaskEpic, deleteTaskEpic, initTasksEpic } from './tasksEpic';
import { catchError } from 'rxjs';
import { dropItemEpic } from './dragEpic';

const rootEpic = (action$, store$, dependencies) =>
  combineEpics(
    addTaskEpic,
    deleteTaskEpic,
    initTasksEpic,
    dropItemEpic,
  )(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    }),
  );

export default rootEpic;
