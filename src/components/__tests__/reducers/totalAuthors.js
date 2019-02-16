import reducer from '../../../reducers/totalAuthors';
import * as types from '../../../actionTypes/authors';
import {authors} from '../../../api/mockAuthor';


describe('Total Authors reducer', () => {
    it('should get total number of authors', () => {
        const total = authors.length;
        expect(reducer(undefined, {type: types.GET_NUMBER_OF_AUTHORS_SUCCESS, total})).toEqual(3);
    });
    it('should increase total number of authors', () => {
        const action = 'add';
        expect(reducer(3, {type: types.UPDATE_NUMBER_OF_AUTHORS_SUCCESS, action})).toEqual(4);
    });
    it('should decrease total number of authors', () => {
        const action = 'delete';
        expect(reducer(3, {type: types.UPDATE_NUMBER_OF_AUTHORS_SUCCESS, action})).toEqual(2);
    });
});