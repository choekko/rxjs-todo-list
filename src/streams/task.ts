import {combineLatest, from, map, of, timer} from 'rxjs';
import {Task} from 'types/task';
import storage from 'utils/storage';

export const tasksTodo$ = timer(200).pipe<Task<'TODO'>[]>(
  map<number, Task<'TODO'>[]>(() => {
    const tasksTodo = (storage.local.get('TODO') ?? []) as Omit<Task<'TODO'>, 'type'>[];
    return tasksTodo.map(todoTask => ({...todoTask, type: 'TODO'}));
  })
)

export const tasksDoing$ = timer(300).pipe<Task<'DOING'>[]>(
  map<number, Task<'DOING'>[]>(() => {
    const tasksDoing = (storage.local.get('DOING') ?? []) as Omit<Task<'DOING'>, 'type'>[];
    return tasksDoing.map(todoTask => ({...todoTask, type: 'DOING'}));
  })
)

export const tasksDone$ = timer(400).pipe<Task<'DONE'>[]>(
  map<number, Task<'DONE'>[]>(() => {
    const tasksDone = (storage.local.get('DONE') ?? []) as Omit<Task<'DONE'>, 'type'>[];
    return tasksDone.map(todoTask => ({...todoTask, type: 'DONE'}));
  })
)

export const allTasks$ = combineLatest([tasksTodo$, tasksDoing$, tasksDone$]);