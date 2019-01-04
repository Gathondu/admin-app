import * as actions from '../../../actions/course';
import * as types from '../../../actionTypes/course';

describe('Course Actions', () => {
    it('should create course', () => {
        const course = {
            title: 'test',
            duration: 5.8,
            authorId: 3
        };
        const expectedAction = {type: types.CREATE_COURSE_SUCCESS, course};
        expect(actions.createCourseSuccess(course)).toEqual(expectedAction);
    });
    it('should delete course', () => {
        const id = 3;
        const expectedAction = {type: types.DELETE_COURSE_SUCCESS, id};
        expect(actions.deleteCourseSuccess(id)).toEqual(expectedAction);
    });
    it('should load courses', () => {
        const courses = [
            {
                title: 'test',
                duration: 5.8,
                authorId: 3
            }];
        const expectedAction = {type: types.LOAD_COURSES_SUCCESS, courses};
        expect(actions.loadCoursesSuccess(courses)).toEqual(expectedAction);
    });
    it('should update course', () => {
        const course = {
            title: 'test',
            duration: 5.8,
            authorId: 3
        };
        const expectedAction = {type: types.UPDATE_COURSE_SUCCESS, course};
        expect(actions.updateCourseSuccess(course)).toEqual(expectedAction);
    });
    it('should get number of courses', () => {
        const total = 5;
        const expectedAction = {type: types.GET_NUMBER_OF_COURSES_SUCCESS, total};
        expect(actions.getNumberOfCoursesSuccess(total)).toEqual(expectedAction);
    });
    it('should update number of courses', () => {
        const action = 'delete';
        const expectedAction = {type: types.UPDATE_NUMBER_OF_COURSES_SUCCESS, action};
        expect(actions.updateTotalCourses(action)).toEqual(expectedAction);
    });
});