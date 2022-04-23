import {useState} from 'react';
import {StateLinkType} from 'types/common';

export function useStateLink<T>(initialValue: T): StateLinkType<T> {
  const [value, set] = useState<T>(initialValue);
  return { value, set };
}
