import {map, mergeMap, Observable} from 'rxjs';
import {ofType} from 'redux-observable';
import actionTypes from '../constants/actionTypes';
import {Action} from '../types/common';
import {DropItemPayload, resetDraggedItem} from '../actions/drag';
import {moveTask, saveTasks} from '../actions/tasks';

export const dropItemEpic = (action$: Observable<Action<DropItemPayload>>) => {
  return action$.pipe(
    ofType(actionTypes.DROP_ITEM),
    mergeMap<Action<DropItemPayload>, Action[]>(action$ => {
     if (!action$.payload) throw new TypeError('dropItemEpic :: Please throw payload');
     const { task, listTypeWhereDragOver } = action$.payload;
     return [moveTask({task, listTypeWhereDragOver}), resetDraggedItem(), saveTasks()];
    })
  )
}