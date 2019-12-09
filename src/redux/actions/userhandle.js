import { GET_USER, LOGOUT_USER } from '../constants/action';

const dispatchAction = (dispatch, type, payload) => {
  dispatch({
    type: type,
    payload: payload
  });
};

export function verifyUser() {
}

export function logoutUser() {
  localStorage.removeItem('authenticationToken');
  return dispatch => dispatchAction(dispatch, LOGOUT_USER, {});
}
