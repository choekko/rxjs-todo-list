/** @jsxImportSource @emotion/react */
import * as React from 'react';
import {css, Theme} from '@emotion/react';
import {TaskType} from '../../../types/task';

export interface VTaskListProps {
  taskType: TaskType
}

const VTaskList = ({taskType}: VTaskListProps) => {
  return (
    <section css={theme => taskListStyle(theme, taskType)}>
    </section>
  );
};

const taskListStyle = (theme: Theme, type: TaskType) => css`
  flex: 1 0 ${type === 'TODO' ? 'auto' : '300px'};
  ${type === 'TODO' ? null : 'position: relative'};
  ${type === 'TODO' ? 'width: 100%' : 'height: 100%'};
  border: 1px solid gray;
  background-color: ${theme.color.backgroundDark};
  
  &::before {
    position: absolute;
    color: white;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    content: '${type}';
    font-size: 40px;
    font-weight: bold;
    color: ${theme.color.backgroundDeepDark}
  }
`

export default VTaskList;