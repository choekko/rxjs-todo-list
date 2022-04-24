/** @jsxImportSource @emotion/react */

import * as React from 'react';
import TaskInput from '../../components/taskInput/TaskInput';
import TaskList from '../../components/taskList/TaskList';
import {css, Theme} from '@emotion/react';
import {Tasks} from '../../reducers/tasks';

export interface VTaskMachineProps {
  tasks: Tasks
}

function VTaskMachine({tasks}: VTaskMachineProps) {
  return (
    <div css={taskListStyle}>
      <div css={inputAndTodoListWrapStyle}>
        <TaskInput />
        <TaskList<'TODO'> taskType={'TODO'} tasks={tasks.TODO}/>
      </div>
      <TaskList<'DOING'> taskType={'DOING'} tasks={tasks.DOING}/>
      <TaskList<'DONE'> taskType={'DONE'} tasks={tasks.DONE}/>
    </div>
  );
};


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

export default VTaskMachine;