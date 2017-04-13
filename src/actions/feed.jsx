/**
 * @fileoverview FeedActions
 * @name feed.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import axios from 'axios';

const fetchFeedsLoading = () => (
  {
    type: 'FETCH_FEEDS_LOADING',
  }
);

const fetchFeedsSuccess = feeds => (
  {
    type: 'FETCH_FEEDS_SUCCESS',
    feeds,
  }
);

const fetchFeedsFailed = err => (
  {
    type: 'FETCH_FEEDS_SUCCESS',
    err,
  }
);

export default () => (
  (dispatch) => {
    dispatch(fetchFeedsLoading);
    const url = `http://${process.env.HOST}/api/v1/feeds`;
    return axios.get(url).then((res) => {
      dispatch(fetchFeedsSuccess(res.data));
    }).catch((err) => {
      dispatch(fetchFeedsFailed(err));
    });
  }
);
