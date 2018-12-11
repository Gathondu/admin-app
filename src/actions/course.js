import * as CourseActionTypes from '../actionTypes/course'
import courseApi from "../api/mockCourse";


export const addCourse = course => {
    return { type: CourseActionTypes.ADD_COURSE, course }
};

export const removeCourse = index => {
   return { type: CourseActionTypes.REMOVE_COURSE, index }
};

export const loadCoursesSuccess = courses => {
    return {type: CourseActionTypes.LOAD_COURSES_SUCCESS, courses}
};

export function loadCourses() {
    return function (dispatch) {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        })
    }
}