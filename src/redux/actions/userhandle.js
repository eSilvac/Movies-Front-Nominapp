import Api from '../../utils/api';

import { CREATE_USER, GET_USER, LOGOUT_USER } from '../constants/action';

const dispatchAction = (dispatch, type, payload) => {
  dispatch({
    type: type,
    payload: payload
  });
};

export function getUser(payload) {
  return async dispatch => {
    try {
      const { data } = await Api.post('login', payload)
      localStorage.setItem('authenticationToken', data.token);
      dispatchAction(dispatch, CREATE_USER, { email: payload.email });
    } catch (error) {
      console.log(error);
    }
  }
}

export function createUser(payload) {
  return async dispatch => {
    try {
      const { data } = await Api.post('register', payload)
      localStorage.setItem('authenticationToken', data.token);
      dispatchAction(dispatch, CREATE_USER, { email: payload.email });
    } catch (error) {
      console.log(error);
    }
  }
}

export function logoutUser() {
  localStorage.removeItem('authenticationToken');
  return dispatch => dispatchAction(dispatch, LOGOUT_USER, {});
}
