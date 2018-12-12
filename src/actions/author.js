import * as AuthorActionTypes from "../actionTypes/author";
import AuthorApi from "../api/mockAuthor";
import {beginAjaxCall} from './ajaxStatus';

export const addAuthor = author => {
  return { type: AuthorActionTypes.ADD_AUTHOR, author };
};

export const removeAuthor = index => {
  return { type: AuthorActionTypes.REMOVE_AUTHOR, index };
};

export const loadAuthorsSuccess = authors => {
  return { type: AuthorActionTypes.LOAD_AUTHORS_SUCCESS, authors };
};

export function loadAuthors() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch(error => {
        throw error;
      });
  };
}
