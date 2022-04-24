import {combineReducers} from 'redux';
import drag from './drag';
import tasks from './tasks';

export type ReducerType = ReturnType<typeof rootReducer>
const rootReducer = combineReducers({
  drag,
  tasks,
})

export default rootReducer;