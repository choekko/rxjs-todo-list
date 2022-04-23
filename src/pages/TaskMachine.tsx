/** @jsxImportSource @emotion/react */
import React, {useEffect, useState} from 'react';
import {css, Theme} from '@emotion/react';
import {Task, TaskType} from 'types/task';
import {allTasks$} from 'streams/task';
import TaskInput from 'components/taskInput/TaskInput';
import TaskList from 'components/taskList/TaskList';

function TaskMachine() {
	const [tasksTodo, setTasksTodo] = useState<Task<'TODO'>[]>([]);
	const [tasksDoing, setTasksDoing] = useState<Task<'DOING'>[]>([]);
	const [tasksDone, setTasksDone] = useState<Task<'DONE'>[]>([]);

	const callbackAfterSaveTask = (task: Task<TaskType>) => {
		switch (task.type) {
			case 'TODO':
				setTasksTodo(prev => [...prev, task as Task<'TODO'>]);
				break;
			case 'DOING':
				setTasksDoing(prev => [...prev, task as Task<'DOING'>]);
				break;
			case 'DONE':
				setTasksDone(prev => [...prev, task as Task<'DONE'>]);
				break;
			default:
				break;
		}
	}

	useEffect(() => {
		allTasks$.subscribe(([tasksTodo, tasksDoing, tasksDone]) => {
			setTasksTodo(tasksTodo);
			setTasksDoing(tasksDoing);
			setTasksDone(tasksDone);
		});
	}, [])

	return <div css={taskListStyle}>
		<div css={inputAndTodoListWrapStyle}>
			<TaskInput callbackAfterSaveTask={callbackAfterSaveTask}/>
			<TaskList<'TODO'> taskType={'TODO'} tasks={tasksTodo}/>
		</div>
		<TaskList<'DOING'> taskType={'DOING'} tasks={tasksDoing}/>
		<TaskList<'DONE'> taskType={'DONE'} tasks={tasksDone}/>
	</div>
}

const taskListStyle = (theme: Theme) => css`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  padding: 30px 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: ${theme.color.backgroundDeepDark}
`

const inputAndTodoListWrapStyle = css`
	position: relative;
	flex: 1 0 300px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 30px;
`

export default TaskMachine;
