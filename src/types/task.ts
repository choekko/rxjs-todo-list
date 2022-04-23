import {TASK_TYPES} from 'constants/task';
import {ArrayElement} from 'types/utils';

export type TaskType = ArrayElement<typeof TASK_TYPES>;

export type Task<T extends TaskType | never> = {
  type: T;
  value: string;
  createdDateYmd: string;
}