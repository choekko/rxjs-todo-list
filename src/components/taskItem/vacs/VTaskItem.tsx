/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { css, Theme } from '@emotion/react';
import { Task, TaskType } from 'types/task';
import { TASK_TYPE_ICON_MAP } from 'constants/task';
import { DragEventHandler, MouseEventHandler } from 'react';

export interface VTaskItemProps<T extends TaskType> {
  task: Task<T>;
  onDragEnd: DragEventHandler;
  onDragStart: DragEventHandler;
  onDeleteBtnClick: MouseEventHandler;
}

function VTaskItem<T extends TaskType>({ task, onDragEnd, onDragStart, onDeleteBtnClick }: VTaskItemProps<T>) {
  return (
    <article css={taskItemStyle} draggable={true} onDragStart={e => onDragStart?.(e)} onDragEnd={e => onDragEnd?.(e)}>
      <p css={taskValueStyle}>{task.value}</p>
      <div css={taskFooterStyle}>
        <button css={deleteBtnStyle} onClick={onDeleteBtnClick}>
          DELETE
        </button>
        <span>
          {task.createdDateYmd} {TASK_TYPE_ICON_MAP[task.type]}
        </span>
      </div>
    </article>
  );
}

const taskItemStyle = (theme: Theme) => css`
  overflow: auto;
  height: 80px;
  padding: 10px 10px 5px 10px;
  background: ${theme.color.skyblue};
  border: 1px solid ${theme.color.backgroundDark};
`;

const taskValueStyle = css`
  box-sizing: border-box;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  height: 60px;
  overflow: auto;
`;

const taskFooterStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;

  span {
    color: black;
  }
`;

const deleteBtnStyle = css`
  font-size: 10px;
  background-color: rgba(0, 0, 0, 0);

  &:hover {
    color: white;
  }
`;

export default VTaskItem;
