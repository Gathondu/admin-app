import * as AuthorActionTypes from "../actionTypes/authors";
import AuthorApi from "../api/mockAuthor";
import {ajaxCallError, beginAjaxCall} from './ajaxStatus';
import toastr from "toastr";


export const createAuthorSuccess = author => {
  return { type: AuthorActionTypes.CREATE_AUTHOR_SUCCESS, author };
};

export const deleteAuthorSuccess = id => {
  return { type: AuthorActionTypes.DELETE_AUTHOR_SUCCESS, id };
};

export const loadAuthorsSuccess = authors => {
  return { type: AuthorActionTypes.LOAD_AUTHORS_SUCCESS, authors };
};

export const updateAuthorSuccess = author => {
  return { type: AuthorActionTypes.UPDATE_AUTHOR_SUCCESS, author };
};

export const getNumberOfAuthorsSuccess = total => {
  return { type: AuthorActionTypes.GET_NUMBER_OF_AUTHORS_SUCCESS, total };
};

export const updateTotalAuthors = action => {
  return { type: AuthorActionTypes.UPDATE_NUMBER_OF_AUTHORS_SUCCESS, action };
};

export function loadAuthors() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
        dispatch(getNumberOfAuthorsSuccess(authors.length));
      });
  };
}

export function saveAuthor(author) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return AuthorApi
        .saveAuthor(author)
        .then(savedAuthor => {
          if (author.id) {
            dispatch(updateAuthorSuccess(savedAuthor));
          } else {
            dispatch(createAuthorSuccess(savedAuthor));
            dispatch(updateTotalAuthors("add"));
          }
        })
        .catch(error => {
          dispatch(ajaxCallError(error));
          throw error;
        });
  };
}

export function deleteAuthor(id) {
  return function(dispatch) {
      dispatch(beginAjaxCall());
    return AuthorApi
        .deleteAuthor(id)
        .then(
            dispatch(deleteAuthorSuccess(id)),
            dispatch(updateTotalAuthors("delete")),
            toastr.success("Author Deleted.")
        );
  };
}

