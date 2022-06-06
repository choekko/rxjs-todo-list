import { Task, TaskType } from '../types/task';
import actionTypes from '../constants/actionTypes';
import { Tasks } from '../reducers/tasks';

export type AddTaskPayload = Omit<Task<'TODO' | 'DOING' | 'DONE'>, 'id' | 'createdDateYmd'>;
export const addTask = (payload: AddTaskPayload) => ({
  type: actionTypes.ADD_TASK,
  payload,
});

export const setTasks = (payload: Partial<Tasks>) => ({
  type: actionTypes.SET_TASKS,
  payload,
});

export const initTasks = () => ({
  type: actionTypes.INIT_TASKS,
});

export interface MoveTaskPayload {
  task: Task<'TODO' | 'DOING' | 'DONE'>;
  listTypeWhereDragOver: TaskType;
}
export const moveTask = (payload: MoveTaskPayload) => ({
  type: actionTypes.MOVE_TASK,
  payload,
});

export const saveTasks = () => ({
  type: actionTypes.SAVE_TASKS,
});

export interface DeleteTaskPayload {
  id: number;
  type: TaskType;
}
export const deleteTask = (payload: DeleteTaskPayload) => ({
  type: actionTypes.DELETE_TASK,
  payload,
});
