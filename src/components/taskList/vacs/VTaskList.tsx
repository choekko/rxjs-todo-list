/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { css, Theme } from '@emotion/react';
import { Task, TaskType } from 'types/task';
import TaskItem from 'components/taskItem/TaskItem';
import { DragEventHandler } from 'react';

export interface VTaskListProps<T extends TaskType> {
  taskType: T;
  tasks: Task<T>[];
  isDragOver?: boolean;
  onDragEnter?: DragEventHandler;
}

function VTaskList<T extends TaskType>({ taskType, tasks, isDragOver = false, onDragEnter }: VTaskListProps<T>) {
  return (
    <section
      id={taskType}
      css={theme => taskListStyle(theme, taskType, isDragOver)}
      onDragEnter={e => onDragEnter?.(e)}
    >
      {tasks.map((task, idx) => (
        <TaskItem key={idx} task={task} />
      ))}
      {/* key로 넣을만한 게 없어 일단 idx 삽입. (현재 업무를 스토리지로 저장하기 떄문에 업무에 고유번호를 붙이기 힘든 상황) */}
    </section>
  );
}

const taskListStyle = (theme: Theme, type: TaskType, isDragOver = false) => css`
  flex: 1 0 ${type === 'TODO' ? 'auto' : '300px'};
  ${type === 'TODO' ? null : 'position: relative'};
  ${type === 'TODO' ? 'width: 100%' : 'height: 100%'};
  border: 1px solid ${isDragOver ? theme.color.skyblue : 'gray'};
  background-color: ${theme.color.backgroundDark};
  display: inline-block;

  &::before {
    position: absolute;
    color: white;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    content: '${type}';
    font-size: 40px;
    font-weight: bold;
    color: ${isDragOver ? theme.color.skyblue : theme.color.backgroundDeepDark};
  }
`;

export default VTaskList;
