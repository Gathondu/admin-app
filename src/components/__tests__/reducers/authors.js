import reducer from '../../../reducers/authors';
import * as types from '../../../actionTypes/authors';
import {authors} from '../../../api/mockAuthor';

describe('Author reducers', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {type: ''})).toEqual([]);
    });
    it('should create author', () => {
        const author = {
            firstName: 'Test',
            lastName: 'Test'
        };
        expect(reducer([], {type: types.CREATE_AUTHOR_SUCCESS, author})).toEqual([author]);
    });
    it('should update author', () => {
        const author = {
            firstName: 'Test',
            lastName: 'Test',
            id: 'cory-house'
        };
        expect(reducer(authors, {
            type: types.UPDATE_AUTHOR_SUCCESS,
            author
        })).toEqual([...authors.filter(authr => authr.id !== author.id), author]);
    });
    it('should delete author', () => {
        const id = 'cory-house';
        expect(reducer(authors, {
            type: types.DELETE_AUTHOR_SUCCESS,
            id
        })).toEqual([...authors.filter(author => author.id !== id)]);
    });
});