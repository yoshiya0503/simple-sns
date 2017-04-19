/**
 * @fileoverview ProfileActions
 * @name profile.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import axios from 'axios';
import { openDialog } from './dialog';
import { startScheduler } from '../actions/scheduler';

const fetchProfileLoading = () => (
  {
    type: 'FETCH_PROFILE_LOADING',
    isLoading: true,
  }
);

const fetchProfileSuccess = profile => (
  {
    type: 'FETCH_PROFILE_SUCCESS',
    isLoading: false,
    profile,
  }
);

const fetchProfileFailed = err => (
  {
    type: 'FETCH_PROFILE_FAILED',
    isLoading: false,
    err,
  }
);

// TODO shceduler はミドルウェアに
// TODO LoadingIndicator は ミドルウェアに
export default () => (
  (dispatch) => {
    dispatch(fetchProfileLoading());
    const url = `http://${process.env.HOST}/api/v1/profile`;
    const session = { TOKEN: localStorage.getItem('token') };
    return axios.get(url, { headers: session }).then((res) => {
      dispatch(startScheduler(1000, () => {
        console.log('hoge');
      }));
      dispatch(fetchProfileSuccess(res.data));
    }).catch((err) => {
      dispatch(fetchProfileFailed(err));
      dispatch(openDialog());
    });
  }
);
