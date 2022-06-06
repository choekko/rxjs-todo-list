import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from 'reducers';
import { dropItem, setDraggedItem } from 'actions/drag';
import { DragEvent } from 'react';
import { Task, TaskType } from 'types/task';
import { deleteTask } from 'actions/tasks';

function useTaskItem<T extends TaskType>(task: Task<T>) {
  const dispatch = useDispatch();
  const listTypeWhereDragOver = useSelector((store: ReducerType) => store.drag?.listTypeWhereDragOver ?? task.type);

  const eventHandlers = {
    handleOnDragStart: () => {
      dispatch(setDraggedItem({ ...task, listTypeWhereDragOver: task.type }));
    },
    handleOnDragEnd: (e: DragEvent) => {
      e.preventDefault();
      dispatch(dropItem({ task, listTypeWhereDragOver }));
    },
    handleDeleteBtnClick: () => {
      dispatch(deleteTask({ type: task.type, id: task.id }));
    },
  };

  return { ...eventHandlers };
}

export default useTaskItem;
