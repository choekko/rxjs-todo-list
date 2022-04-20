/** @jsxImportSource @emotion/react */
import * as React from 'react';
import {MouseEventHandler, RefObject} from 'react';
import {css} from '@emotion/react';

export interface VTaskInputProps {
	taskTextAreaRef: RefObject<HTMLTextAreaElement>;
	taskTypeSelectRef: RefObject<HTMLSelectElement>;
	onSaveBtnClick: MouseEventHandler<HTMLButtonElement>;
}

const VTaskInput = ({taskTextAreaRef, taskTypeSelectRef, onSaveBtnClick}: VTaskInputProps)  => {
	return (
		<section css={taskInputStyle}>
			<div css={taskInputHeaderStyle}>
				<span>Task</span>
				<div css={selectAndBtnWrapStyle}>
					<select ref={taskTypeSelectRef} css={taskTypeSelectStyle}>
						<option value="TODO">🔴 &nbsp; <span>TODO</span></option>
						<option value="DOING">🟠 &nbsp; <span>DOING</span></option>
						<option value="DONE">🟢 &nbsp; <span>DONE</span></option>
					</select>
					<button onClick={onSaveBtnClick} css={saveTaskBtnStyle}>저장</button>
				</div>
			</div>
			<textarea ref={taskTextAreaRef} css={taskTextAreaStyle}/>
		</section>
	);
};

const taskInputStyle = css`
	display: flex;
	justify-content: center;
	flex-direction: column;
	gap: 5px;
`

const taskInputHeaderStyle = css`
	display: flex;
	justify-content: space-between;
	align-items: center;

  & > span {
    font-size: 25px;
  }
`

const taskTypeSelectStyle = css`
	height: 30px;
	font-size: 13px;
	border-radius: 10px;
	border: 1px solid gray;
	
	&:focus {
		outline: none;
	}
`

const taskTextAreaStyle = css`
	width: 300px;
	height: 100px;
	box-sizing: border-box;
	padding: 10px;
	
	&:focus {
		outline: none;
	}
`

const saveTaskBtnStyle = css`
	width: 90px;
	height: 30px;
  border-radius: 10px;
	border: 1px solid gray;
	background-color: #fff;
`
const selectAndBtnWrapStyle = css`
	display: flex;
	gap: 5px;
`

export default VTaskInput;