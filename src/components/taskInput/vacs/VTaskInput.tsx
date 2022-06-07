/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { ChangeEventHandler, MouseEventHandler } from 'react';
import { css, Theme } from '@emotion/react';
import { TaskType } from 'types/task';
import { TASK_TYPE_ICON_MAP, TASK_TYPES } from 'constants/task';

export interface VTaskInputProps {
  currentTaskType: TaskType;
  currentTaskValue: string;
  onTaskTypeSelectChange: ChangeEventHandler<HTMLSelectElement>;
  onTaskValueInputChange: ChangeEventHandler<HTMLTextAreaElement>;
  onSaveBtnClick: MouseEventHandler<HTMLButtonElement>;
}

const VTaskInput = ({
  currentTaskType,
  currentTaskValue,
  onTaskTypeSelectChange,
  onTaskValueInputChange,
  onSaveBtnClick,
}: VTaskInputProps) => {
  return (
    <section css={taskInputStyle}>
      <div css={taskInputHeaderStyle}>
        <span>Task</span>
        <div css={selectAndBtnWrapStyle}>
          <select css={taskTypeSelectStyle} onChange={onTaskTypeSelectChange} value={currentTaskType}>
            {TASK_TYPES.map(taskType => (
              <option key={taskType} value={taskType}>
                {TASK_TYPE_ICON_MAP[taskType]}&nbsp; {taskType}
              </option>
            ))}
          </select>
          <button onClick={onSaveBtnClick} css={saveTaskBtnStyle}>
            SAVE
          </button>
        </div>
      </div>
      <textarea
        css={taskTextAreaStyle}
        spellCheck={false}
        placeholder={'Enter your task.'}
        onChange={onTaskValueInputChange}
        value={currentTaskValue}
      />
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
`;

const taskInputHeaderStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 auto;

  & > span {
    font-size: 25px;
  }
`;

const taskTypeSelectStyle = css`
  height: 30px;
  font-size: 13px;
  border-radius: 10px;
  border: 1px solid gray;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  padding-left: 5px;

  &:focus {
    outline: none;
  }
`;

const taskTextAreaStyle = (theme: Theme) => css`
  flex: 1 0 100px;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid ${theme.color.skyblue};
  background-color: rgba(0, 0, 0, 0);
  color: white;
  font-size: 18px;

  &:focus {
    outline: none;
  }
`;

const saveTaskBtnStyle = (theme: Theme) => css`
  width: 90px;
  height: 30px;
  border-radius: 10px;
  background-color: ${theme.color.skyblue};
`;
const selectAndBtnWrapStyle = css`
  display: flex;
  gap: 5px;
`;

export default VTaskInput;
