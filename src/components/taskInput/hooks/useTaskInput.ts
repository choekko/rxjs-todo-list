import {ForwardedRef, useImperativeHandle, useRef} from 'react';
import {TaskType} from '@/types/task';

export interface TaskInputRef {
	getText: () => string;
	getType: () => TaskType;
}

const useTaskInput = (ref: ForwardedRef<TaskInputRef>) => {
	const taskTextAreaRef = useRef<HTMLTextAreaElement>(null);
	const taskTypeSelectRef = useRef<HTMLSelectElement>(null);

	useImperativeHandle(ref, () => ({
		getText: () => taskTextAreaRef.current?.value ?? '',
		getType: () => (taskTypeSelectRef.current?.value ?? '') as TaskType
	}))

	return { taskTextAreaRef, taskTypeSelectRef };
}

export default useTaskInput;