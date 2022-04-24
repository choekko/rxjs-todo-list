import {ChangeEvent, useCallback, useState} from 'react';
import {Task, TaskType} from 'types/task';
import {TASK_TYPES} from 'constants/task';
import {getDate} from 'utils/date';
import storage from 'utils/storage';
import {useDispatch} from 'react-redux';
import {addTask} from '../../../actions/tasks';

const useTaskInput = (callbackAfterSaveTask?: ((task: Task<TaskType>) => void) | (() => void)) => {
	const [taskType, setTaskType] = useState<TaskType>('TODO');
	const [taskValue, setTaskValue] = useState<string>('');
	const dispatch = useDispatch();

	const reset = () => {
		setTaskType('TODO');
		setTaskValue('');
	}

	const eventHandler = {
		handleTaskTypeSelectChange: useCallback((e: ChangeEvent<HTMLSelectElement>) => {
			const taskType = e.currentTarget.value as TaskType;
			if (!TASK_TYPES.includes(taskType)) {
				alert('업무 상태 선택에 오류가 있습니다');
				return;
			}
			setTaskType(taskType);
		}, []),
		handleTaskValueInputChange: useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
			const taskValue = e.currentTarget.value;
			setTaskValue(taskValue);
		}, []),
		handleSaveBtnClick: () => {
			if (!Boolean(taskValue)) {
				alert('업무 내용을 입력해주세요.');
				return;
			}
			dispatch(addTask({
				type: taskType,
				value: taskValue,
			}))
			alert('업무가 저장되었습니다.')
			reset();
		}
	} as const;

	return { currentTaskType: taskType, currentTaskValue: taskValue, ...eventHandler };
}

export default useTaskInput;