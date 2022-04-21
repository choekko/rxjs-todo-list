import * as React from 'react';
import VTaskList, {VTaskListProps} from './vacs/VTaskList';
import {TaskType} from '../../types/task';
import {VTaskInputProps} from '../taskInput/vacs/VTaskInput';

interface TaskListProps {
  taskType: TaskType
}

const TaskList = ({ taskType }: TaskListProps) => {

  const vTaskListProps: VTaskListProps = {
    taskType,
  }

  return (
    <VTaskList { ...vTaskListProps }/>
  );
};



export default TaskList;