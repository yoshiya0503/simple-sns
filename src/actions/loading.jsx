/**
 * @fileoverview LoadingIndicator
 * @name loading.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

const stop = () => (
  {
    type: 'STOP_LOADING',
    isLoading: false,
  }
);

const start = () => (
  {
    type: 'START_LOADING',
    isLoading: true,
  }
);

export const startLoading = () => (
  (dispatch) => {
    dispatch(start());
  }
);

export const stopLoading = () => (
  (dispatch) => {
    dispatch(stop());
  }
);
