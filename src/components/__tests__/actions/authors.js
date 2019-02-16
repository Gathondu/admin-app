import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import * as actions from '../../../actions/authors';
import * as types from '../../../actionTypes/authors';
import * as ajaxTypes from '../../../actionTypes/ajaxStatus';
import {authors} from '../../../api/mockAuthor';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

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
describe('Author Async actions', () => {
    it('should load authors', () => {
        const total = authors.length;
        const expectedActions = [
            {type: ajaxTypes.BEGIN_AJAX_CALL},
            {type: types.LOAD_AUTHORS_SUCCESS, authors},
            {type: types.GET_NUMBER_OF_AUTHORS_SUCCESS, total}
        ];
        const store = mockStore({authors: []});
        return store.dispatch(actions.loadAuthors()).then(()=>{
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    it('should create new author', () => {
        const authorToBeCreated = {
            firstName: 'Denis',
            lastName: 'Gathondu'
        };
        const author = {
            ...authorToBeCreated,
            id: 'denis-gathondu'
        };
        const action = 'add';
        const expectedActions = [
            {type: ajaxTypes.BEGIN_AJAX_CALL},
            {type: types.CREATE_AUTHOR_SUCCESS, author},
            {type: types.UPDATE_NUMBER_OF_AUTHORS_SUCCESS, action}
        ];
        const store = mockStore({authors: []});
        return store.dispatch(actions.saveAuthor(authorToBeCreated)).then(()=>{
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    it('should update existing author', () => {
        const author = {
            firstName: 'test',
            lastName: 'user',
            id: 'cory-house'
        };
        const expectedActions = [
            {type: ajaxTypes.BEGIN_AJAX_CALL},
            {type: types.UPDATE_AUTHOR_SUCCESS, author}
        ];
        const store = mockStore({authors: []});
        return store.dispatch(actions.saveAuthor(author)).then(()=>{
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    it('should throw an error with incorrect author data', () => {
        const author = {
            firstName: '',
            lastName: ''
        };
        const expectedActions = [
            {type: ajaxTypes.BEGIN_AJAX_CALL},
            {type: ajaxTypes.AJAX_CALL_ERROR}
        ];
        const store = mockStore({authors: []});
        return store.dispatch(actions.saveAuthor(author)).catch(()=>{
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    it('should delete author', () => {
        const id = 'cory-house';
        const action = 'delete';
        const expectedActions = [
            {type: ajaxTypes.BEGIN_AJAX_CALL},
            {type: types.DELETE_AUTHOR_SUCCESS, id},
            {type: types.UPDATE_NUMBER_OF_AUTHORS_SUCCESS, action}
        ];
        const store = mockStore({authors: []});
        return store.dispatch(actions.deleteAuthor(id)).then(()=>{
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});