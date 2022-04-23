import actionTypes from '../constants/actionTypes';
import {DraggedItem} from '../reducers/drag';

export const setDraggedItem = (payload: DraggedItem) => ({
  type: actionTypes.SET_DRAGGED_ITEM,
  payload,
})