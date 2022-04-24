/** @jsxImportSource @emotion/react */
import * as React from 'react';
import {css, Theme} from '@emotion/react';
import {Task, TaskType} from 'types/task';
import {TASK_TYPE_ICON_MAP} from 'constants/task';
import {useDispatch, useSelector} from 'react-redux';
import {dropItem, setDraggedItem} from '../../../actions/drag';
import {ReducerType} from '../../../reducers';
import {DragEvent} from 'react';

export interface VTaskItemProps<T extends TaskType> {
  task: Task<T>
}

function VTaskItem<T extends TaskType>({ task }: VTaskItemProps<T>) {
  const dispatch = useDispatch();
  const listTypeWhereDragOver = useSelector((store: ReducerType) => store.drag?.listTypeWhereDragOver ?? task.type)
  const handleOnDragStart = () => {
    dispatch(setDraggedItem({...task, listTypeWhereDragOver: task.type}));
  }
  const handleOnDragEnd = (e: DragEvent) => {
    e.preventDefault()
    dispatch(dropItem({task, listTypeWhereDragOver}))
  }

  return (
    <article
      css={taskItemStyle}
      draggable={true}
      onDragStart={handleOnDragStart}
      onDragEnd={handleOnDragEnd}
      onDrop={() => console.log('drop')}
    >
      <p css={taskValueStyle}>{task.value}</p>
      <div css={taskFooterStyle}>
        {task.createdDateYmd} {TASK_TYPE_ICON_MAP[task.type]}
      </div>
    </article>
  );
};

const taskItemStyle = (theme: Theme) => css`
  overflow: auto;
  height: 80px;
  padding: 10px 10px 5px 10px;
  background: ${theme.color.skyblue};
  border: 1px solid ${theme.color.backgroundDark}
`

const taskValueStyle = css`
  box-sizing: border-box;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
  height: 60px;
`

const taskFooterStyle = css`
  margin-top: 5px;
  float: right;
`

export default VTaskItem;