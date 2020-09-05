import { combineReducers } from 'redux';
import theme from './themeReducers';
import fab from './fabReducers';

export default combineReducers({ theme, fab });
