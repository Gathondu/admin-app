import reducer from '../../../reducers/totalCourses';
import * as types from '../../../actionTypes/course';
import {courses} from '../../../api/mockCourse';


describe('Total Courses reducer', () => {
    it('should get total number of courses', () => {
        const total = courses.length;
        expect(reducer(undefined, {type: types.GET_NUMBER_OF_COURSES_SUCCESS, total})).toEqual(5);
    });
    it('should increase total number of courses', () => {
        const action = 'add';
        expect(reducer(5, {type: types.UPDATE_NUMBER_OF_COURSES_SUCCESS, action})).toEqual(6);
    });
    it('should decrease total number of courses', () => {
        const action = 'delete';
        expect(reducer(5, {type: types.UPDATE_NUMBER_OF_COURSES_SUCCESS, action})).toEqual(4);
    });
});