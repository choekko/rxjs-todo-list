/** @jsxImportSource @emotion/react */
import * as React from 'react';
import {MouseEventHandler, RefObject} from 'react';
import {css, Theme} from '@emotion/react';
import theme from '../../../styles/theme';

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
			<textarea ref={taskTextAreaRef} css={taskTextAreaStyle} spellCheck={false} placeholder={'내용을 입력하세요.'}/>
		</section>
	);
};

const taskInputStyle = css`
	display: flex;
	justify-content: center;
	flex-direction: column;
	flex: 0 0 100px;
	width: 100%;
	gap: 5px;
`

const taskInputHeaderStyle = css`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex: 1 0 auto;

  & > span {
    font-size: 25px;
  }
`

const taskTypeSelectStyle = css`
	height: 30px;
	font-size: 13px;
	border-radius: 10px;
	border: 1px solid gray;
	background-color: rgba(0,0,0,0);
	color: white;
	
	&:focus {
		outline: none;
	}
`

const taskTextAreaStyle = (theme: Theme) => css`
	flex: 1 0 100px;
	box-sizing: border-box;
	padding: 10px;
	border: 1px solid ${theme.color.skyblue};
	background-color: rgba(0,0,0,0);
	color: white;
	font-size: 18px;
	
	&:focus {
		outline: none;
	}
`

const saveTaskBtnStyle = (theme: Theme) => css`
	width: 90px;
	height: 30px;
  border-radius: 10px;
	background-color: ${theme.color.skyblue}
`
const selectAndBtnWrapStyle = css`
	display: flex;
	gap: 5px;
`

export default VTaskInput;