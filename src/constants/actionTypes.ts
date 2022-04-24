const actionTypes = {
  SET_DRAGGED_ITEM: 'SET_DRAGGED_ITEM',
  RESET_DRAGGED_ITEM: 'RESET_DRAGGED_ITEM',
  GET_DRAGGED_ITEM: 'GET_DRAGGED_ITEM',
  SET_LIST_TYPE_WHERE_DRAG_OVER: 'SET_LIST_TYPE_WHERE_DRAG_OVER',
  DROP_ITEM: 'DROP_ITEM',

  ADD_TASK: 'ADD_TASK',
  INIT_TASKS: 'INIT_TASKS',
  SET_TASKS: 'SET_TASKS',
  MOVE_TASK: 'MOVE_TASK',
  SAVE_TASKS: 'SAVE_TASKS',
} as const;

export default actionTypes;
