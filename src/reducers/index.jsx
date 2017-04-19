/**
 * @fileoverview Reducers
 * @name index.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import { combineReducers } from 'redux';
import feed from './feed';
import profile from './profile';
import dialog from './dialog';
import scheduler from './scheduler';
import session from './session';

export default combineReducers({
  session,
  feed,
  profile,
  dialog,
  scheduler,
});
