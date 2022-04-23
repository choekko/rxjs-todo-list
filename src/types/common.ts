import {Dispatch, SetStateAction} from 'react';

export type StateLinkType<T> = { value: T; set: Dispatch<SetStateAction<T>> };
