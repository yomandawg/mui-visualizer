import {
  TOGGLE_DARK_THEME,
  TOGGLE_LIGHT_THEME,
  TOGGLE_DEFAULT_THEME,
  CHANGE_THEME,
} from 'actions/types';

export function toggleDarkTheme() {
  return {
    type: TOGGLE_DARK_THEME,
  };
}

export function toggleLightTheme() {
  return {
    type: TOGGLE_LIGHT_THEME,
  };
}

export function toggleDefaultTheme(theme) {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  return {
    type: TOGGLE_DEFAULT_THEME,
    payload: newTheme,
  };
}

export function changeTheme(theme) {
  let newTheme;
  switch (theme) {
    case 'light':
      newTheme = 'light';
      break;
    case 'dark':
      newTheme = 'dark';
      break;
    default:
      newTheme = 'light';
  }

  return {
    type: CHANGE_THEME,
    payload: newTheme,
  };
}
