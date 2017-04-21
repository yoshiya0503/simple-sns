/**
 * @fileoverview ProfileReducer
 * @name profile.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import _ from 'lodash';

const initialState = {
  profile: {},
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PROFILE_SUCCESS':
      return _.assign({}, state, { profile: action.profile });
    case 'FETCH_PROFILE_FAILED':
      return _.assign({}, state, { error: { message: '通信エラー' } });
    default:
      return state;
  }
};
