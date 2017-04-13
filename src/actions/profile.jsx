/**
 * @fileoverview ProfileActions
 * @name profile.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */

import axios from 'axios';

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

export default () => (
  (dispatch) => {
    dispatch(fetchProfileLoading());
    return axios.get('http://localhost:3000/api/v1/profile').then((res) => {
      dispatch(fetchProfileSuccess(res.data));
    }).catch((err) => {
      dispatch(fetchProfileFailed(err));
    });
  }
);
