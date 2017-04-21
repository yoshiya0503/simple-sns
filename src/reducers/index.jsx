/**
 * @fileoverview Reducers
 * @name index.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import feed from './feed';
import profile from './profile';
import scheduler from './scheduler';
import session from './session';
import dialog from './dialog';
import loading from './loading';

export default combineReducers({
  session,
  feed,
  profile,
  scheduler,
  dialog,
  loading,
  routing: routerReducer,
});
