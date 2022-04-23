import {TaskType} from '../types/task';

export const TASK_TYPES = ['TODO', 'DOING', 'DONE'] as const;

export const TASK_TYPE_ICON_MAP: Record<TaskType, string> = {
  'TODO': '🔴',
  'DOING': '🟠',
  'DONE': '🟢',
}