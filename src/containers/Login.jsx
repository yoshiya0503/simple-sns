/**
 * @fileoverview LoginContainer
 * @name Login.jsx
 * @author Yoshiya Ito <myon53@gmail.com>
 */
import { connect } from 'react-redux';
import Login from '../components/Login';
import { increments } from '../actions';

function mapStateToProps(state) {
  return {
    test: state.test,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increments: () => {
      dispatch(increments(10));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
