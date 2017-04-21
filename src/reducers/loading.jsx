/**
 * @fileoverview Loading
 * @name loading.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import _ from 'lodash';

const initialState = {
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return _.assign({}, state, { isLoading: true });
    case 'STOP_LOADING':
      return _.assign({}, state, { isLoading: false });
    default:
      return state;
  }
};
