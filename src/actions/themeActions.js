import {
  TOGGLE_COLOR,
  CHANGE_COLOR,
  TOGGLE_TYPOGRAPHY,
  CHANGE_TYPOGRPAHY,
} from './types';

import * as themeColors from 'theme/colors';
import * as themeTypographys from 'theme/typographys';

export function toggleColor() {
  return {
    type: TOGGLE_COLOR,
  };
}

export function changeColor(color) {
  let newColor = themeColors[color] ? color : 'light';

  return {
    type: CHANGE_COLOR,
    payload: newColor,
  };
}

export function toggleTypography() {
  return {
    type: TOGGLE_TYPOGRAPHY,
  };
}

export function changeTypography(typography) {
  let newTypography = themeTypographys[typography] ? typography : 'normal';

  return {
    type: CHANGE_TYPOGRPAHY,
    payload: newTypography,
  };
}
