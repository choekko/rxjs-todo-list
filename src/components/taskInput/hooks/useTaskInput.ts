import {ChangeEvent, useCallback, useState} from 'react';
import {Task, TaskType} from 'types/task';
import {TASK_TYPES} from 'constants/task';
import {getDate} from 'utils/date';
import storage from 'utils/storage';

const useTaskInput = (callbackAfterSaveTask?: ((task: Task<TaskType>) => void) | (() => void)) => {
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
			const { local } = storage;
			const prevData = local.get(taskType) ?? [];
			const currentNumber = local.get('taskNumber') ?? 0;

			const taskInfo: Omit<Task<never>, 'type'> = {
				id: currentNumber + 1,
				value: taskValue,
				createdDateYmd: getDate('ymd', { withHyphen: true }),
			}

			local.set(taskType, [...prevData, taskInfo]);
			local.set('taskNumber', currentNumber + 1);
			callbackAfterSaveTask?.({...taskInfo, type: taskType});
			alert('업무가 저장되었습니다.')
			reset();
		}
	} as const;

	return { currentTaskType: taskType, currentTaskValue: taskValue, ...eventHandler };
}

export default useTaskInput;