import * as React from 'react';
import { Task, TaskType } from 'types/task';
import VTaskItem, { VTaskItemProps } from 'components/taskItem/vacs/VTaskItem';
import useTaskItem from './hooks/useTaskItem';

interface TaskItemProps<T extends TaskType> {
  task: Task<T>;
}

function TaskItem<T extends TaskType>({ task }: TaskItemProps<T>) {
  const { handleDragEnd, handleDragStart, handleDeleteBtnClick } = useTaskItem<T>(task);

  const vTaskItemProps: VTaskItemProps<T> = {
    task,
    onDragStart: handleDragStart,
    onDragEnd: handleDragEnd,
    onDeleteBtnClick: handleDeleteBtnClick,
  };
  return <VTaskItem<T> {...vTaskItemProps} />;
}

export default TaskItem;
