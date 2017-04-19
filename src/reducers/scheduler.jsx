/**
 * @fileoverview Scheduler
 * @name scheduler.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import _ from 'lodash';

const initialState = {
  scheduler: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'START_SCHEDULER':
      return _.assign({}, state, { scheduler: action.scheduler });
    case 'STOP_SCHEDULER':
      return _.assign({}, state, { scheduler: null });
    default:
      return state;
  }
};
