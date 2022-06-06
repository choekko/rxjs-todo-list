import { map, mergeMap, Observable, switchMap } from 'rxjs';
import { ofType } from 'redux-observable';
import actionTypes from '../constants/actionTypes';
import { Action } from '../types/common';
import storage from '../utils/storage';
import { Task } from '../types/task';
import { getDate } from '../utils/date';
import { AddTaskPayload, saveTasks, setTasks } from '../actions/tasks';
import { allTasks$ } from '../streams/task';

export const addTaskEpic = (action$: Observable<Action<AddTaskPayload>>) => {
  return action$.pipe(
    ofType(actionTypes.ADD_TASK),
    map<Action<AddTaskPayload>, Task<'TODO' | 'DONE' | 'DOING'>>(action$ => {
      if (!action$.payload) throw new TypeError('addTaskEpic :: Please throw payload');
      const { value, type } = action$.payload;
      const { local } = storage;
      const currentNumber = local.get('taskNumber') ?? 0;

      const taskInfo: Task<'TODO' | 'DONE' | 'DOING'> = {
        id: currentNumber + 1,
        type,
        value,
        createdDateYmd: getDate('ymd', { withHyphen: true }),
      };

      return taskInfo;
    }),
    mergeMap<Task<'TODO' | 'DONE' | 'DOING'>, Action[]>(taskInfo => {
      return [setTasks({ [taskInfo.type]: [taskInfo] }), saveTasks()];
    }),
  );
};

export const initTasksEpic = (action$: Observable<Action>) => {
  return action$.pipe(
    ofType(actionTypes.INIT_TASKS),
    switchMap(() =>
      allTasks$.pipe(
        mergeMap(([TODO, DOING, DONE]) => {
          return [
            setTasks({
              TODO,
              DOING,
              DONE,
            }),
          ];
        }),
      ),
    ),
  );
};
