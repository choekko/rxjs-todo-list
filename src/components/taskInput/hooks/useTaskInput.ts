import {ChangeEvent, useCallback, useState} from 'react';
import storage from '../../../utils/storage';
import {Task, TaskType} from '../../../types/task';
import {TASK_TYPES} from '../../../constants/task';
import {getDate} from '../../../utils/date';

const useTaskInput = () => {
	const [taskType, setTaskType] = useState<TaskType>('TODO');
	const [taskValue, setTaskValue] = useState<string>('');

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
			console.log(taskType);
			setTaskType(taskType);
		}, []),
		handleTaskValueInputChange: useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
			const taskValue = e.currentTarget.value;
			console.log(taskValue);
			setTaskValue(taskValue);
		}, []),
		handleSaveBtnClick: () => {
			if (!Boolean(taskValue)) {
				alert('업무 내용을 입력해주세요.');
				return;
			}
			const { local } = storage;
			const prevData = local.get(taskType) ?? [];
			
			const taskInfo: Omit<Task<never>, 'type'> = {
				value: taskValue,
				createdDateYmd: getDate('ymd', { withHyphen: true }),
			}

			storage.local.set(taskType, [...prevData, taskInfo]);
			alert('업무가 저장되었습니다.')
			reset();
		}
	} as const;

	return { currentTaskType: taskType, currentTaskValue: taskValue, ...eventHandler };
}

export default useTaskInput;