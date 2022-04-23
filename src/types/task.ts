import {TASK_TYPES} from '../constants/task';
import {ArrayElement} from './utils';

export type TaskType = ArrayElement<typeof TASK_TYPES>;
export type Task<T extends TaskType> = {
  type: T;
  value: string;
  createdDateYmd: string;
}