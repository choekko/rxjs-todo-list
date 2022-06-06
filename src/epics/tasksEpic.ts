import { map, mergeMap, Observable, switchMap } from 'rxjs';
import { ofType, StateObservable } from 'redux-observable';
import actionTypes from '../constants/actionTypes';
import { Action } from '../types/common';
import storage from '../utils/storage';
import { Task } from '../types/task';
import { getDate } from '../utils/date';
import { AddTaskPayload, DeleteTaskPayload, saveTasks, setTasks } from '../actions/tasks';
import { allTasks$ } from '../streams/task';
import { ReducerType } from 'reducers';

export const addTaskEpic = (action$: Observable<Action<AddTaskPayload>>, $state: StateObservable<ReducerType>) => {
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
      const prevTasks = $state.value.tasks[taskInfo.type] as Task<'TODO' | 'DOING' | 'DONE'>[];

      return [setTasks({ [taskInfo.type]: [...prevTasks, taskInfo] }), saveTasks()];
    }),
  );
};

export const deleteTaskEpic = (
  action$: Observable<Action<DeleteTaskPayload>>,
  $state: StateObservable<ReducerType>,
) => {
  return action$.pipe(
    ofType(actionTypes.DELETE_TASK),
    mergeMap<Action<DeleteTaskPayload>, Action[]>(action$ => {
      if (!action$.payload) throw new TypeError('deleteTaskEpic :: Please throw payload');
      const { id: targetTaskId, type } = action$.payload as DeleteTaskPayload;

      const prevTasks = $state.value.tasks[type] as Task<'TODO' | 'DOING' | 'DONE'>[];
      const updatedTasks = prevTasks.filter(task => task.id !== targetTaskId);

      return [setTasks({ [type]: updatedTasks }), saveTasks()];
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
