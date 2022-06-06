import * as React from 'react';
import { Task, TaskType } from 'types/task';
import VTaskItem, { VTaskItemProps } from 'components/taskItem/vacs/VTaskItem';
import useTaskItem from './hooks/useTaskItem';

interface TaskItemProps<T extends TaskType> {
  task: Task<T>;
}

function TaskItem<T extends TaskType>({ task }: TaskItemProps<T>) {
  const { handleOnDragEnd, handleOnDragStart, handleDeleteBtnClick } = useTaskItem<T>(task);

  const vTaskItemProps: VTaskItemProps<T> = {
    task,
    onDragStart: handleOnDragStart,
    onDragEnd: handleOnDragEnd,
    onDeleteBtnClick: handleDeleteBtnClick,
  };
  return <VTaskItem<T> {...vTaskItemProps} />;
}

export default TaskItem;
