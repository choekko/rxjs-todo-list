import * as React from 'react';
import {Task, TaskType} from 'types/task';
import useTaskInput from 'components/taskInput/hooks/useTaskInput';
import VTaskInput, {VTaskInputProps} from 'components/taskInput/vacs/VTaskInput';

interface TaskInputProps {
	callbackAfterSaveTask?: ((task: Task<TaskType>) => void) | (() => void);
}

const TaskInput = ({callbackAfterSaveTask}: TaskInputProps)  => {
	const { currentTaskType, currentTaskValue, handleTaskTypeSelectChange, handleTaskValueInputChange, handleSaveBtnClick } = useTaskInput(callbackAfterSaveTask);

	const vTaskInputProps: VTaskInputProps = {
		currentTaskValue,
		currentTaskType,
		onTaskValueInputChange: handleTaskValueInputChange,
		onTaskTypeSelectChange: handleTaskTypeSelectChange,
		onSaveBtnClick: handleSaveBtnClick
	}

  return <VTaskInput {...vTaskInputProps}/>
};

export default TaskInput;