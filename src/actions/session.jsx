/**
 * @fileoverview Sessions
 * @name session.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import axios from 'axios';
import { openDialog } from './dialog';

const fetchSessionLoading = () => (
  {
    type: 'FETCH_SESSION_LOADING',
  }
);

const fetchSession = token => (
  {
    type: 'FETCH_SESSION',
    token,
  }
);

const createSessionSuccess = token => (
  {
    type: 'CREATE_SESSION_SUCCESS',
    token,
  }
);

const createSessionFailed = err => (
  {
    type: 'CREATE_SESSION_FAILED',
    err,
  }
);

const deleteSessionSuccess = () => (
  {
    type: 'DELETE_SESSION_SUCCESS',
  }
);

export const fetchLocalSession = () => (
  (dispatch) => {
    dispatch(fetchSession(localStorage.getItem('token'),
    ));
  }
);

export const createSession = (email, password) => (
  (dispatch) => {
    dispatch(fetchSessionLoading());
    const url = `http://${process.env.HOST}/api/v1/login`;
    const body = { email, password };
    return axios.post(url, body).then((res) => {
      localStorage.setItem('token', res.data.token);
      dispatch(createSessionSuccess(res.data.token));
    }).catch((err) => {
      dispatch(createSessionFailed(err));
      dispatch(openDialog());
    });
  }
);

export const deleteSession = () => (
  (dispatch) => {
    const url = `http://${process.env.HOST}/api/v1/login`;
    return axios.post(url).then((res) => {
      dispatch(deleteSessionSuccess(res.data));
    });
  }
);
