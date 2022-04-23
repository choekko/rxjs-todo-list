import * as React from 'react';
import VTaskItem, {VTaskItemProps} from './vacs/VTaskItem';
import {TaskType} from '../../types/task';

interface TaskItemProps<T extends TaskType> extends VTaskItemProps<T> {}

function TaskItem<T extends TaskType>({ task }: TaskItemProps<T>) {

  const vTaskItemProps: VTaskItemProps<T> = {
    task
  }
  return (
    <VTaskItem<T> {...vTaskItemProps}/>
  );
};

export default TaskItem;