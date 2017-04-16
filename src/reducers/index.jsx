/**
 * @fileoverview Reducers
 * @name index.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import { combineReducers } from 'redux';
import feed from './feed';
import profile from './profile';
import login from './login';
import dialog from './dialog';

export default combineReducers({
  feed,
  profile,
  login,
  dialog,
});
