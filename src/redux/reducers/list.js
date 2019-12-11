import { SET_LIST } from '../constants/action';

export default function list(state = {}, action) {
  switch (action.type) {
    case SET_LIST:
      return state = action.payload
    default:
      return state;
  }
};
