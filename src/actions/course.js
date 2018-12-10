import * as CourseActionTypes from '../actionTypes/course'

export const addCourse = (title, description) => {
    return { type: CourseActionTypes.ADD_COURSE, title, description }
};

export const removeCourse = index => {
   return { type: CourseActionTypes.REMOVE_COURSE, index }
};