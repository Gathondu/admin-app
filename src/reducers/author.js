import * as AuthorActionTypes from "../actionTypes/author";
import initialState from "./initialState";

export default function Author(state = initialState.authors, action) {
  switch (action.type) {
    case AuthorActionTypes.ADD_AUTHOR:
      return [...state, action.author];
    case AuthorActionTypes.REMOVE_AUTHOR:
      return [
        ...state.splice(0, action.index),
        ...state.splice(action.index + 1)
      ];
    case AuthorActionTypes.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
