import {Dispatch, SetStateAction} from 'react';
import actionTypes from '../constants/actionTypes';

export type StateLinkType<T> = { value: T; set: Dispatch<SetStateAction<T>> };

export interface Action<P = any> {
  type: keyof typeof actionTypes;
  payload?: P;
}
