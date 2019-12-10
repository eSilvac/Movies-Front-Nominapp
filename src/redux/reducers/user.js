import { GET_USER, CREATE_USER, LOGOUT_USER } from '../constants/action';

export default function user(state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return state = action.payload
    case CREATE_USER:
      return state = action.payload
    case LOGOUT_USER:
      return state = {}
    default:
      return state;
  }
};
