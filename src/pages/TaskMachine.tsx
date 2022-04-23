/** @jsxImportSource @emotion/react */
import React, {useState} from 'react';
import {css, Theme} from '@emotion/react';
import TaskInput from '../components/taskInput/TaskInput';
import TaskList from '../components/taskList/TaskList';
import {Task} from '../types/task';

function TaskMachine() {
	const [tasksTodo, setTasksTodo] = useState<Task<'TODO'>[]>([{
		type: 'TODO',
		value: '테스트 업무',
		createdDateYmd: '2022-04-06'
	}]);
	const [tasksDoing, setTasksDoing] = useState<Task<'DOING'>[]>([]);
	const [tasksDone, setTasksDone] = useState<Task<'DONE'>[]>([]);

	return <div css={taskListStyle}>
		<div css={inputAndTodoListWrapStyle}>
			<TaskInput />
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
