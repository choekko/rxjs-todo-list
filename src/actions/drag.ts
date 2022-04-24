import actionTypes from '../constants/actionTypes';
import {DraggedItem} from '../reducers/drag';
import {TaskType} from '../types/task';
import {MoveTaskPayload} from './tasks';


export const setDraggedItem = (payload: DraggedItem) => ({
  type: actionTypes.SET_DRAGGED_ITEM,
  payload,
})

export const resetDraggedItem = () => ({
  type: actionTypes.RESET_DRAGGED_ITEM,
})

export const setListTypeWhereDragOver = (payload: Pick<DraggedItem, 'listTypeWhereDragOver'>) => ({
  type: actionTypes.SET_LIST_TYPE_WHERE_DRAG_OVER,
  payload,
})


export interface DropItemPayload extends MoveTaskPayload {}
export const dropItem = (payload: DropItemPayload) => ({
  type: actionTypes.DROP_ITEM,
  payload,
})