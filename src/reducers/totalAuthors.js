import * as AuthorActionTypes from '../actionTypes/authors'
import initialState from './initialState'

/**
 * @return {number}
 */
export default function TotalAuthors (state=initialState.totalAuthors, action) {
    switch (action.type) {
        case AuthorActionTypes.GET_NUMBER_OF_AUTHORS_SUCCESS:
            return action.total;
        case AuthorActionTypes.UPDATE_NUMBER_OF_AUTHORS_SUCCESS:
            if (action.action === 'add') return state + 1;
            return state - 1;
        default:
            return state
    }
}