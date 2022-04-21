/** @jsxImportSource @emotion/react */
import React from 'react';
import {css, Theme} from '@emotion/react';
import {TaskInputRef} from '@/components/taskInput/hooks/useTaskInput';
import {useRef} from 'react';
import TaskInput from '../components/taskInput/TaskInput';
import TodoList from '../components/taskList/TodoList';
import DoingList from '../components/taskList/DoingList';
import DoneList from '../components/taskList/DoneList';

const Task = () => {
	const taskInputRef = useRef<TaskInputRef>(null);
	const handleSaveTaskBtnClick = () => {
		if (!taskInputRef.current) return;
		console.log(taskInputRef.current.getType(), taskInputRef.current.getText());
	}

	return <div css={taskListStyle}>
		<div css={inputAndTodoListWrapStyle}>
			<TaskInput ref={taskInputRef} onSaveBtnClick={handleSaveTaskBtnClick}/>
			<TodoList/>
		</div>
		<DoingList/>
		<DoneList/>
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
  background-color: ${theme.color.backgroundDark}
`

const inputAndTodoListWrapStyle = css`
	flex: 1 0 300px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 30px;
`

export default Task;
