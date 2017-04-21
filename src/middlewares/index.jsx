/**
 * @fileoverview ErrorHandling
 * @name errors.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import { openDialog } from '../actions/dialog';
import { startLoading } from '../actions/loading';

/**
 * @method ErrorDialog
 * @description エラーが起きた場合、そのダイアログを表示する
 * @return next
 */
export const ErrorDialog = store => next => action => {
  if (!action.err || !action.err.message) {
    return next(action);
  }
  if (action.isDialog) {
    return next(action);
  }
  store.dispatch(openDialog());
  return next(action);
};
