import { FAB_INCREMENT, FAB_DECREMENT } from './types';

export function fabIncrement() {
  return {
    type: FAB_INCREMENT,
  };
}

export function fabDecrement() {
  return {
    type: FAB_DECREMENT,
  };
}
