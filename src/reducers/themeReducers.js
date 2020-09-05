import {
  TOGGLE_COLOR,
  CHANGE_COLOR,
  TOGGLE_TYPOGRAPHY,
  CHANGE_TYPOGRPAHY,
} from 'actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case TOGGLE_COLOR:
      const newColor = state.color === 'light' ? 'dark' : 'light';
      return { ...state, color: newColor };
    case CHANGE_COLOR:
      return { ...state, color: action.payload };
    case TOGGLE_TYPOGRAPHY:
      return { ...state, typography: 'normal' };
    case CHANGE_TYPOGRPAHY:
      return { ...state, typography: action.payload };
    default:
      return state;
  }
}
