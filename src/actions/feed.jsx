/**
 * @fileoverview FeedActions
 * @name feed.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import axios from 'axios';
import { openDialog } from './dialog';

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
    type: 'FETCH_FEEDS_FAILED',
    err,
  }
);

export default () => (
  (dispatch) => {
    dispatch(fetchFeedsLoading);
    const url = `http://${process.env.HOST}/api/v1/feeds`;
    const session = { TOKEN: localStorage.getItem('token') };
    return axios.get(url, {headers: session}).then((res) => {
      dispatch(fetchFeedsSuccess(res.data));
    }).catch((err) => {
      dispatch(fetchFeedsFailed(err));
      dispatch(openDialog());
    });
  }
);
