import {Action} from '../types/common';
import actionTypes from '../constants/actionTypes';
import {TaskType} from '../types/task';

export interface DraggedItem {
  id: number;
  type: TaskType;
}

const drag = (state: DraggedItem | null = null, action : Action<DraggedItem>) => {
  switch (action.type) {
    case actionTypes.SET_DRAGGED_ITEM:
      return action.payload;
    default:
      return state;
  }
}

export default drag;