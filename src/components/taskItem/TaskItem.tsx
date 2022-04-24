import * as React from 'react';
import {TaskType} from 'types/task';
import VTaskItem, {VTaskItemProps} from 'components/taskItem/vacs/VTaskItem';
import useTaskItem from './hooks/useTaskItem';

interface TaskItemProps<T extends TaskType> extends VTaskItemProps<T> {}

function TaskItem<T extends TaskType>({ task }: TaskItemProps<T>) {
  const { handleOnDragEnd, handleOnDragStart } = useTaskItem<T>(task);

  const vTaskItemProps: VTaskItemProps<T> = {
    task,
    onDragStart: handleOnDragStart,
    onDragEnd: handleOnDragEnd,
  }
  return (
    <VTaskItem<T> {...vTaskItemProps}/>
  );
};

export default TaskItem;