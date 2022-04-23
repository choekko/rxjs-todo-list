import * as React from 'react';
import VTaskInput, {VTaskInputProps} from './vacs/VTaskInput';
import useTaskInput from './hooks/useTaskInput';

interface TaskInputProps {
}

const TaskInput = ({}: TaskInputProps)  => {
	const { currentTaskType, currentTaskValue, handleTaskTypeSelectChange, handleTaskValueInputChange, handleSaveBtnClick } = useTaskInput();

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