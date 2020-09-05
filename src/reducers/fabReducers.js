import { FAB_INCREMENT, FAB_DECREMENT } from 'actions/types';

export default function (state = 0, action) {
  switch (action.type) {
    case FAB_INCREMENT:
      if (state < 10) {
        return state + 1;
      } else {
        return state;
      }
    case FAB_DECREMENT:
      if (state > 0) {
        return state - 1;
      } else {
        return state;
      }
    default:
      return state;
  }
}
