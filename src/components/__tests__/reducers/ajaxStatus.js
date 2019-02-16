import reducer from '../../../reducers/ajaxStatus';
import * as types from '../../../actionTypes/ajaxStatus';
import * as courseTypes from '../../../actionTypes/course';

describe('Ajax Status reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined,{type: ''})).toEqual(0);
    });
    it('should add ajax call if ajax begun', () => {
        expect(reducer(undefined,{type: types.BEGIN_AJAX_CALL})).toEqual(1);
    });
    it('should remove ajax call if ajax call errors', () => {
        expect(reducer(2,{type: types.AJAX_CALL_ERROR})).toEqual(1);
    });
    it('should remove ajax call if ajax call completes completely', () => {
        expect(reducer(1,{type: courseTypes.LOAD_COURSES_SUCCESS})).toEqual(0);
    });
});