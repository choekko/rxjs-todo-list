import {useDispatch, useSelector} from 'react-redux';
import {ReducerType} from 'reducers';
import {useMemo} from 'react';
import {setListTypeWhereDragOver} from 'actions/drag';
import {TaskType} from 'types/task';

const useTaskList = (taskType: TaskType) => {
  const draggedItem = useSelector((store: ReducerType) => store.drag);
  const dispatch = useDispatch();

  const isDragOver = useMemo(() => draggedItem?.listTypeWhereDragOver === taskType, [draggedItem]);

  const handleDragEnter = () => {
    dispatch(setListTypeWhereDragOver(({
      listTypeWhereDragOver: taskType
    })))
  }

  return { isDragOver, handleDragEnter};
}

export default useTaskList;