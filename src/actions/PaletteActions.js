import {
  CHANGE_PALETTE_TEXT,
  CHANGE_PALETTE_ACTION,
  CHANGE_PALETTE_BACKGROUND,
  CHANGE_PALETTE,
} from './types';
import { lightPalette, darkPalette } from 'static/palettes';

export function changePalette(presetPalette) {
  let newPalette;
  switch (presetPalette) {
    case 'light':
      newPalette = lightPalette;
      break;
    case 'dark':
      newPalette = darkPalette;
      break;
    default:
      newPalette = lightPalette;
  }
  return {
    type: CHANGE_PALETTE,
    payload: newPalette,
  };
}

export function changePaletteText(newText) {
  return {
    type: CHANGE_PALETTE_TEXT,
    payload: newText,
  };
}

export function changePaletteAction(newAction) {
  return {
    type: CHANGE_PALETTE_ACTION,
    payload: newAction,
  };
}

export function changePaletteBackground(newBackground) {
  return {
    type: CHANGE_PALETTE_BACKGROUND,
    payload: newBackground,
  };
}
