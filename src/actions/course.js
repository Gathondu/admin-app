import * as CourseActionTypes from '../actionTypes/course'
import courseApi from "../api/mockCourse";
import {ajaxCallError, beginAjaxCall} from "./ajaxStatus";

export const createCourseSuccess = course => {
    return { type: CourseActionTypes.CREATE_COURSE_SUCCESS, course }
};

export const deleteCourseSuccess = index => {
   return { type: CourseActionTypes.DELETE_COURSE_SUCCESS, index }
};

export const loadCoursesSuccess = courses => {
    return {type: CourseActionTypes.LOAD_COURSES_SUCCESS, courses}
};

export const updateCourseSuccess = course => {
    return {type: CourseActionTypes.UPDATE_COURSE_SUCCESS, course}
};

export function loadCourses() {
    return function (dispatch) {
        dispatch(beginAjaxCall());
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        })
    }
}

export function saveCourse(course) {
    return function (dispatch){
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course).then(savedCourse => {
            course.id ? dispatch(updateCourseSuccess(savedCourse)) :
                dispatch(createCourseSuccess(savedCourse));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error)});
    };
}