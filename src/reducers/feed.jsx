/**
 * @fileoverview FeedReducer
 * @name feed.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import _ from 'lodash';

const initialState = {
  feeds: [],
  err: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_FEEDS_LOADING':
      return state;
    case 'FETCH_FEEDS_SUCCESS':
      return _.assign({}, state, {feeds: action.feeds});
    case 'FETCH_FEEDS_FAILED':
      return action.err;
    default:
      return state;
  }
};
