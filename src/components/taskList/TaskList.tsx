import * as React from 'react';
import VTaskList, {VTaskListProps} from './vacs/VTaskList';
import {Task, TaskType} from '../../types/task';
import {VTaskInputProps} from '../taskInput/vacs/VTaskInput';

interface TaskListProps<T extends TaskType> extends VTaskListProps<T> {}

function TaskList<T extends TaskType>({ taskType, tasks }: TaskListProps<T>) {

  const vTaskListProps: VTaskListProps<T> = {
    taskType,
    tasks,
  }

  return (
    <VTaskList<T> { ...vTaskListProps }/>
  );
};



export default TaskList;