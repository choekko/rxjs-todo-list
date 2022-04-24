import * as React from 'react';
import useTaskInput from 'components/taskInput/hooks/useTaskInput';
import VTaskInput, { VTaskInputProps } from 'components/taskInput/vacs/VTaskInput';

const TaskInput = () => {
  const {
    currentTaskType,
    currentTaskValue,
    handleTaskTypeSelectChange,
    handleTaskValueInputChange,
    handleSaveBtnClick,
  } = useTaskInput();

  const vTaskInputProps: VTaskInputProps = {
    currentTaskValue,
    currentTaskType,
    onTaskValueInputChange: handleTaskValueInputChange,
    onTaskTypeSelectChange: handleTaskTypeSelectChange,
    onSaveBtnClick: handleSaveBtnClick,
  };

  return <VTaskInput {...vTaskInputProps} />;
};

export default TaskInput;
