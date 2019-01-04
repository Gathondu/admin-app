import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../actions/course';
import * as types from '../../../actionTypes/course';
import * as ajaxTypes from "../../../actionTypes/ajaxStatus";
import {courses} from '../../../api/mockCourse';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

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
describe('Course Async Actions', () => {
    it('should load courses', () => {
        const total = courses.length;
        const expectedActions = [
            {type: ajaxTypes.BEGIN_AJAX_CALL},
            {type: types.LOAD_COURSES_SUCCESS, courses},
            {type: types.GET_NUMBER_OF_COURSES_SUCCESS, total}
        ];
        const store = mockStore({courses: []});
        store.dispatch(actions.loadCourses()).then( () =>{
                expect(store.getActions()).toEqual(expectedActions);
            });
    });
    it('should create course', () => {
        const action = 'add';
        const course = {
                title: 'test',
                duration: 5.8,
                authorId: 3
            };
        const expectedActions = [
            {type: ajaxTypes.BEGIN_AJAX_CALL},
            {type: types.CREATE_COURSE_SUCCESS, course},
            {type: types.UPDATE_NUMBER_OF_COURSES_SUCCESS, action}
        ];
        const store = mockStore({courses: []});
        store.dispatch(actions.saveCourse(course)).then(()=>{
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    it('should update course', () => {
        const course ={
            id: "clean-code",
            title: "Clean Code: Writing Tests for Humans",
            watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
            authorId: "dng test",
            length: "3:10",
            category: "Software Practices and Tests"
        };
        const expectedActions = [
            {type: ajaxTypes.BEGIN_AJAX_CALL},
            {type: types.UPDATE_COURSE_SUCCESS, course}
        ];
        const store = mockStore({courses: []});
        store.dispatch(actions.saveCourse(course)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
    it('should delete course', () => {
        const id = 'clean-code';
        const action = 'delete';
        const expectedActions = [
            {type: types.DELETE_COURSE_SUCCESS, id},
            {type: types.UPDATE_NUMBER_OF_COURSES_SUCCESS, action}
        ];
        const store = mockStore({courses: []});
        store.dispatch(actions.deleteCourse(id)).then(()=>{
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});