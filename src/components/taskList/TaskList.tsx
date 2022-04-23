import * as React from 'react';
import VTaskList, {VTaskListProps} from './vacs/VTaskList';
import {TaskType} from 'types/task';

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