import * as React from 'react';
import {TaskType} from 'types/task';
import VTaskItem, {VTaskItemProps} from 'components/taskItem/vacs/VTaskItem';

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