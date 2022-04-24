import actionTypes from '../constants/actionTypes';
import storage from '../utils/storage';
import { Action } from 'types/common';
import { Task } from 'types/task';
import { MoveTaskPayload } from 'actions/tasks';

export interface Tasks {
  TODO: Task<'TODO'>[];
  DOING: Task<'DOING'>[];
  DONE: Task<'DONE'>[];
}

const initialTasks: Tasks = {
  TODO: [],
  DOING: [],
  DONE: [],
};

const tasks = (state: Tasks = initialTasks, action: Action): Tasks => {
  const { TODO, DOING, DONE } = state;
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_TASKS:
      return {
        TODO: [...TODO, ...(payload?.TODO ?? [])],
        DOING: [...DOING, ...(payload?.DOING ?? [])],
        DONE: [...DONE, ...(payload?.DONE ?? [])],
      };
    case actionTypes.MOVE_TASK:
      const { task: targetTask, listTypeWhereDragOver } = payload as MoveTaskPayload;
      if (targetTask.type === listTypeWhereDragOver) return state;

      const convertedTargetTask = { ...targetTask, type: listTypeWhereDragOver };

      return {
        ...state,
        ...{
          [targetTask.type]: (state[targetTask.type] as Task<'TODO' | 'DOING' | 'DONE'>[]).filter(
            task => task.id !== targetTask.id,
          ),
          [listTypeWhereDragOver]: [...state[listTypeWhereDragOver], convertedTargetTask],
        },
      };
    case actionTypes.SAVE_TASKS:
      const { local } = storage;
      const taskNumber = Object.entries(state).reduce((acc, [type, tasks]) => {
        local.remove(type);
        local.set(type, tasks);
        return acc + tasks.length;
      }, 0);
      local.set('taskNumber', taskNumber);
      return state;
    default:
      return state;
  }
};

export default tasks;
