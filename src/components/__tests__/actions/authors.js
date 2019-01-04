import * as actions from '../../../actions/authors';
import * as types from '../../../actionTypes/authors';

describe('Author actions', () => {
    it('should create author', () => {
        const author = {firstName:'first', lastName:'last'};
        const expectedAction = {type: types.CREATE_AUTHOR_SUCCESS, author};
        expect(actions.createAuthorSuccess(author)).toEqual(expectedAction);
    });
    it('should delete author', () => {
        const id = 2;
        const expectedAction = {type: types.DELETE_AUTHOR_SUCCESS, id};
        expect(actions.deleteAuthorSuccess(id)).toEqual(expectedAction);
    });
    it('should load authors', () => {
        const authors = [{firstName: 'first', lastName: 'last'}];
        const expectedAction = {type: types.LOAD_AUTHORS_SUCCESS, authors};
        expect(actions.loadAuthorsSuccess(authors)).toEqual(expectedAction);
    });
    it('should update author', () => {
        const author = {firstName: 'first', lastName: 'last'};
        const expectedAction = {type: types.UPDATE_AUTHOR_SUCCESS, author};
        expect(actions.updateAuthorSuccess(author)).toEqual(expectedAction);
    });
    it('should get total number of authors', () => {
        const total = 5;
        const expectedAction = {type: types.GET_NUMBER_OF_AUTHORS_SUCCESS, total};
        expect(actions.getNumberOfAuthorsSuccess(total)).toEqual(expectedAction);
    });
    it('should update total number of authors', () => {
        const action = 'add';
        const expectedAction = {type: types.UPDATE_NUMBER_OF_AUTHORS_SUCCESS, action};
        expect(actions.updateTotalAuthors(action)).toEqual(expectedAction);
    });
});