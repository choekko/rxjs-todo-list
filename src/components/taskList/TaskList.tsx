import React from 'react';
import VTaskList, { VTaskListProps } from './vacs/VTaskList';
import { TaskType } from 'types/task';
import useTaskList from './hooks/useTaskList';

interface TaskListProps<T extends TaskType> extends VTaskListProps<T> {}

function TaskList<T extends TaskType>({ taskType, tasks }: TaskListProps<T>) {
  const { isDragOver, handleDragEnter } = useTaskList(taskType);

  const vTaskListProps: VTaskListProps<T> = {
    taskType,
    tasks,
    isDragOver,
    onDragEnter: handleDragEnter,
  };

  return <VTaskList<T> {...vTaskListProps} />;
}

export default TaskList;
