import {useDispatch, useSelector} from 'react-redux';
import {ReducerType} from 'reducers';
import {useEffect} from 'react';
import {initTasks} from 'actions/tasks';

const useTaskMachine = () => {
  const tasks = useSelector((store: ReducerType) => store.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initTasks());
  }, [])

  return { tasks };
}

export default useTaskMachine;