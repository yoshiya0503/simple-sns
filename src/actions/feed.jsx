/**
 * @fileoverview FeedActions
 * @name feed.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import axios from 'axios';
import { startLoading, stopLoading } from './loading';

const fetchFeedsSuccess = feeds => (
  {
    type: 'FETCH_FEEDS_SUCCESS',
    feeds,
  }
);

const fetchFeedsFailed = err => (
  {
    type: 'FETCH_FEEDS_FAILED',
    err,
  }
);

export default () => (
  (dispatch) => {
    const url = `http://${process.env.HOST}/api/v1/feeds`;
    const session = { TOKEN: localStorage.getItem('token') };
    dispatch(startLoading());
    return axios.get(url, {headers: session}).then((res) => {
      dispatch(stopLoading());
      dispatch(fetchFeedsSuccess(res.data));
    }).catch((err) => {
      dispatch(stopLoading());
      dispatch(fetchFeedsFailed(err));
    });
  }
);
