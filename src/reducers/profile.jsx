/**
 * @fileoverview ProfileReducer
 * @name profile.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import _ from 'lodash';

const initialState = {
  profile: {},
  isLoading: true,
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PROFILE_LOADING':
      return _.assign({}, state, { isLoading: true });
    case 'FETCH_PROFILE_SUCCESS':
      return _.assign({}, state, {
        profile: action.profile,
        isLoading: false,
      });
    case 'FETCH_PROFILE_FAILED':
      return _.assign({}, state, {
        isLoading: false,
        error: { message: '通信エラー' },
      });
    default:
      return state;
  }
};
