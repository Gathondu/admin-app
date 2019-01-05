import reducer from '../../../reducers/course';
import * as types from '../../../actionTypes/course';
import {courses} from '../../../api/mockCourse';

describe('Course reducer', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {type: ''})).toEqual([]);
    });
    it('should create course', () => {
        const course = {
            title: 'test',
            duration: 4,
            authorId:2
        };
        expect(reducer(undefined, {type: types.CREATE_COURSE_SUCCESS, course})).toEqual([course]);
    });
    it('should update course', () => {
        const course = {
            id: "react-flux-building-applications",
            title: "Building Applications in React and Flux",
            watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
            authorId: "test-test",
            length: "4",
            category: "test"
        };
        expect(reducer(courses,{type: types.UPDATE_COURSE_SUCCESS, course})).toEqual([...courses.filter(crs=>crs.id!==course.id), course]);
    });
    it('should delete a course', () => {
        const id = "react-flux-building-applications";
        expect(reducer(courses,{type: types.DELETE_COURSE_SUCCESS, id})).toEqual([...courses.filter(course => course.id!==id)]);
    });
});