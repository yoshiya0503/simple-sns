/**
 * @fileoverview FeedReducer
 * @name feed.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import _ from 'lodash';

const initialState = {
  feeds: [],
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_FEEDS_LOADING':
      return state;
    case 'FETCH_FEEDS_SUCCESS':
      return _.assign({}, state, { feeds: action.feeds });
    case 'FETCH_FEEDS_FAILED':
      return _.assign({}, state, { error: { message: 'フィードの取得に失敗'} });
    default:
      return state;
  }
};
