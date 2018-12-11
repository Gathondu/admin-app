import * as CourseActionTypes from '../actionTypes/course'


export default function Course(state=[], action) {
    switch (action.type) {
        case CourseActionTypes.ADD_COURSE:
            return [
                ...state,
                action.course
            ];
        case CourseActionTypes.REMOVE_COURSE:
            return [
                ...state.splice(0, action.index),
                ...state.splice(action.index + 1)
            ];
        case CourseActionTypes.LOAD_COURSES_SUCCESS:
            return action.courses;
        default:
            return state;
    }
}