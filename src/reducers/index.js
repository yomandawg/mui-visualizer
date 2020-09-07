import { combineReducers } from 'redux';
import palette from './PaletteReducer';
import fab from './fabReducer';

export default combineReducers({ palette, fab });
