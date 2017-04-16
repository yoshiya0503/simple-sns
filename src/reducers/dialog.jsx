/**
 * @fileoverview Dialog
 * @name dialog.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import _ from 'lodash';

const initialState = {
  isDialog: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_DIALOG':
      return _.assign({}, state, { isDialog: true });
    case 'CLOSE_DIALOG':
      return _.assign({}, state, { isDialog: false });
    case 'DIALOG':
      return _.assign({}, state, {
        isDialog: !state.isDialog,
      });
    default:
      return state;
  }
};
