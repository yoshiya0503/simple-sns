/**
 * @fileoverview Dialog
 * @name dialog.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

const close = () => (
  {
    type: 'CLOSE_DIALOG',
    isDialog: false,
  }
);

const open = () => (
  {
    type: 'OPEN_DIALOG',
    isDialog: true,
  }
);

export const closeDialog = () => (
  (dispatch) => {
    dispatch(close());
  }
);

export const openDialog = () => (
  (dispatch) => {
    dispatch(open());
  }
);
