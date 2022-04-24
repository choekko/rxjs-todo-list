import {Action} from '../types/common';
import actionTypes from '../constants/actionTypes';
import {TaskType} from '../types/task';

export interface DraggedItem {
  id: number;
  type: TaskType;
  listTypeWhereDragOver?: TaskType;
}

const drag = (state: DraggedItem | null = null, action : Action<DraggedItem>): DraggedItem | null => {
  switch (action.type) {
    case actionTypes.SET_DRAGGED_ITEM:
      if (!action.payload) throw TypeError('Please throw payload to SET_DRAAGED_ITEM action');
      return action.payload;
    case actionTypes.SET_LIST_TYPE_WHERE_DRAG_OVER:
      if (!state) throw TypeError('There is no active DraggedItem');
      return {...state, ...action.payload};
    case actionTypes.RESET_DRAGGED_ITEM:
      if (!state) throw TypeError('There is no active DraggedItem');
      return null;
    default:
      return state;
  }
}

export default drag;