/**
 * @fileoverview Reducers
 * @name index.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import _ from 'lodash';

const initialState = {
  test: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENTS':
      return _.assign({}, state, { test: state.test + action.test });
    case 'DECREMENTS':
      return _.assign({}, state, { test: state.test - action.test });
    default:
      return state;
  }
};
