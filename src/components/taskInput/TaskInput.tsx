import * as React from 'react';
import VTaskInput, {VTaskInputProps} from './vacs/VTaskInput';
import useTaskInput, {TaskInputRef} from './hooks/useTaskInput';
import {ForwardedRef, forwardRef, MouseEventHandler} from 'react';

interface TaskInputProps {
	onSaveBtnClick: MouseEventHandler<HTMLButtonElement>
}

const TaskInput = forwardRef(({onSaveBtnClick}: TaskInputProps, ref: ForwardedRef<TaskInputRef>)  => {
	const { taskTypeSelectRef, taskTextAreaRef } = useTaskInput(ref);

	const vTaskInputProps: VTaskInputProps = {
		taskTextAreaRef,
		taskTypeSelectRef,
		onSaveBtnClick
	}

  return <VTaskInput {...vTaskInputProps}/>
});

export default TaskInput;