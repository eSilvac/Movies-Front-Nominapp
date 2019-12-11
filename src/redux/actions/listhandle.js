import Api from '../../utils/api';

import { SET_LIST } from '../constants/action';

const dispatchAction = (dispatch, type, payload) => {
  dispatch({
    type: type,
    payload: payload
  });
};

export function getLists(userId) {
  return async (dispatch) => {
    try {
      const { data } = await Api.get('lists', {
        params: {
          userId: userId
        }
      })
      dispatchAction(dispatch, SET_LIST, data);
    } catch (error) {
      console.log(error);
    }
  }
}

export function createList(payload, callback) {
  return async (dispatch, getState) => {
    const userId = getState().user._id;

    try {
      const { data } = await Api.post('list', { ...payload, userId: userId })
      dispatchAction(dispatch, SET_LIST, data);
      callback();
    } catch (error) {
      console.log(error);
    }
  }
}

export function addMovieToList(listId, movieId) {
  return async (dispatch, getState) => {
    try {
      const { data } = await Api.patch('list/' + listId, { movieId })
      dispatchAction(dispatch, SET_LIST, data);
    } catch (error) {
      console.log(error);
    }
  }
}

export function deleteList(listId, callback) {
  return async dispatch => {
    try {
      const { data } = await Api.delete('list/' + listId)
      console.log(data)
      dispatchAction(dispatch, SET_LIST, data);
      callback();
    } catch (error) {
      console.log(error);
    }
  }
}
