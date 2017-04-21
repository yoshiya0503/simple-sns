/**
 * @fileoverview ProfileActions
 * @name profile.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import axios from 'axios';
import { startScheduler } from '../actions/scheduler';
import { startLoading, stopLoading } from './loading';

const fetchProfileSuccess = profile => (
  {
    type: 'FETCH_PROFILE_SUCCESS',
    profile,
  }
);

const fetchProfileFailed = err => (
  {
    type: 'FETCH_PROFILE_FAILED',
    err,
  }
);

export default () => (
  (dispatch) => {
    const url = `http://${process.env.HOST}/api/v1/profile`;
    const session = { TOKEN: localStorage.getItem('token') };
    dispatch(startLoading());
    return axios.get(url, { headers: session }).then((res) => {
      dispatch(startScheduler(1000, () => {
        console.log('hoge');
      }));
      dispatch(stopLoading());
      dispatch(fetchProfileSuccess(res.data));
    }).catch((err) => {
      dispatch(stopLoading());
      dispatch(fetchProfileFailed(err));
    });
  }
);
