/** @jsxImportSource @emotion/react */
import React from 'react';
import {css, Theme} from '@emotion/react';
import {TaskInputRef} from '@/components/taskInput/hooks/useTaskInput';
import {useRef} from 'react';
import TaskInput from '../components/taskInput/TaskInput';
import TaskList from '../components/taskList/TaskList';

const Task = () => {
	const taskInputRef = useRef<TaskInputRef>(null);
	const handleSaveTaskBtnClick = () => {
		if (!taskInputRef.current) return;
		console.log(taskInputRef.current.getType(), taskInputRef.current.getText());
	}

	return <div css={taskListStyle}>
		<div css={inputAndTodoListWrapStyle}>
			<TaskInput ref={taskInputRef} onSaveBtnClick={handleSaveTaskBtnClick}/>
			<TaskList taskType={'TODO'}/>
		</div>
		<TaskList taskType={'DOING'}/>
		<TaskList taskType={'DONE'}/>
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

export default Task;
