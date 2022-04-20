/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from '@emotion/react';
import {TaskInputRef} from '@/components/taskInput/hooks/useTaskInput';
import {useRef} from 'react';
import TaskInput from '../components/taskInput/TaskInput';

const Task = () => {
	const taskInputRef = useRef<TaskInputRef>(null);
	const handleSaveTaskBtnClick = () => {
		if (!taskInputRef.current) return;
		console.log(taskInputRef.current.getType(), taskInputRef.current.getText());
	}

	return <div css={todoListStyle}>
		<TaskInput ref={taskInputRef} onSaveBtnClick={handleSaveTaskBtnClick}/>
	</div>
}

const todoListStyle = css`
	height: 100vh;
	width: 100vw;
	background-color: skyblue;
	display: flex;
	justify-content: center;
	align-items: center;
`

export default Task;
