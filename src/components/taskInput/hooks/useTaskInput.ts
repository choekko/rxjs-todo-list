import { ChangeEvent, useCallback, useState } from 'react';
import { TaskType } from 'types/task';
import { TASK_TYPES } from 'constants/task';
import { useDispatch } from 'react-redux';
import { addTask } from 'actions/tasks';

const useTaskInput = () => {
  const [taskType, setTaskType] = useState<TaskType>('TODO');
  const [taskValue, setTaskValue] = useState<string>('');
  const dispatch = useDispatch();

  const reset = () => {
    setTaskType('TODO');
    setTaskValue('');
  };

  const eventHandler = {
    handleTaskTypeSelectChange: useCallback((e: ChangeEvent<HTMLSelectElement>) => {
      const taskType = e.currentTarget.value as TaskType;
      if (!TASK_TYPES.includes(taskType)) {
        alert('There is an error in the status selection.');
        return;
      }
      setTaskType(taskType);
    }, []),
    handleTaskValueInputChange: useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
      const taskValue = e.currentTarget.value;
      setTaskValue(taskValue);
    }, []),
    handleSaveBtnClick: () => {
      if (!taskValue) {
        alert('Please enter your task.');
        return;
      }
      dispatch(
        addTask({
          type: taskType,
          value: taskValue,
        }),
      );
      alert('Task has been saved.');
      reset();
    },
  } as const;

  return { currentTaskType: taskType, currentTaskValue: taskValue, ...eventHandler };
};

export default useTaskInput;
