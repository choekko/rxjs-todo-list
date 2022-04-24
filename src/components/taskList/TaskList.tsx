import React, {DragEvent, useMemo} from 'react';
import VTaskList, {VTaskListProps} from './vacs/VTaskList';
import {TaskType} from 'types/task';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setListTypeWhereDragOver} from '../../actions/drag';
import {ReducerType} from '../../reducers';

interface TaskListProps<T extends TaskType> extends VTaskListProps<T> {}

function TaskList<T extends TaskType>({ taskType, tasks }: TaskListProps<T>) {
  const draggedItem = useSelector((store: ReducerType) => store.drag);
  const dispatch = useDispatch();

  const isDragOver = useMemo(() => draggedItem?.listTypeWhereDragOver === taskType, [draggedItem]);


  const handleDragEnter = (e: DragEvent) => {
    dispatch(setListTypeWhereDragOver(({
      listTypeWhereDragOver: taskType
    })))
  }

  const vTaskListProps: VTaskListProps<T> = {
    taskType,
    tasks,
    isDragOver,
    onDragEnter: handleDragEnter,
  }

  return (
    <VTaskList<T> { ...vTaskListProps }/>
  );
};



export default TaskList;