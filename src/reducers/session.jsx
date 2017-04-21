/**
 * @fileoverview SessionReducer
 * @name session.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import _ from 'lodash';

const initialState = {
  token: localStorage.getItem('token'),
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_SESSION_SUCCESS':
      return _.assign({}, state, { token: action.token });
    case 'CREATE_SESSION_FAILED':
      return _.assign({}, state, { error: { message: 'ログインに失敗' } });
    case 'FETCH_SESSION':
      return _.assign({}, state, { token: action.token });
    default:
      return state;
  }
};
