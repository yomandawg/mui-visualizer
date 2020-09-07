import {
  CHANGE_PALETTE,
  CHANGE_PALETTE_TEXT,
  CHANGE_PALETTE_ACTION,
  CHANGE_PALETTE_BACKGROUND,
} from 'actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case CHANGE_PALETTE:
      return action.payload;
    case CHANGE_PALETTE_TEXT:
      return { ...state, text: action.payload };
    case CHANGE_PALETTE_ACTION:
      return { ...state, action: action.payload };
    case CHANGE_PALETTE_BACKGROUND:
      return { ...state, background: action.payload };
    default:
      return state;
  }
}
