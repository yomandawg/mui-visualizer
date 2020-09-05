import {
  TOGGLE_DARK_THEME,
  TOGGLE_LIGHT_THEME,
  TOGGLE_DEFAULT_THEME,
  CHANGE_THEME,
} from 'actions/types';

export default function (state = 'light', action) {
  switch (action.type) {
    case TOGGLE_DARK_THEME:
      return 'dark';
    case TOGGLE_LIGHT_THEME:
      return 'light';
    case TOGGLE_DEFAULT_THEME:
      return action.payload;
    case CHANGE_THEME:
      return action.payload;
    default:
      return state;
  }
}
