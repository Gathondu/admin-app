import * as AuthorActionTypes from "../actionTypes/authors";
import initialState from "./initialState";

export default function Author(state = initialState.authors, action) {
  switch (action.type) {
    case AuthorActionTypes.CREATE_AUTHOR_SUCCESS:
      return [...state, action.author];
    case AuthorActionTypes.DELETE_AUTHOR_SUCCESS:
      return [
        ...state.filter(author => author.id !== action.id)
      ];
    case AuthorActionTypes.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    case AuthorActionTypes.UPDATE_AUTHOR_SUCCESS:
      return [...state.filter(author => author.id !== action.author.id), action.author];
    default:
      return state;
  }
}
