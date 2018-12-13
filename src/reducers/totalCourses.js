import * as CourseActionTypes from "../actionTypes/course";
import initialState from "./initialState";

/**
 * @return {number}
 */
export default function TotalCourses(state=initialState.totalCourses, action) {
    switch (action.type) {
        case CourseActionTypes.GET_NUMBER_OF_COURSES_SUCCESS:
            return action.total;
        case CourseActionTypes.UPDATE_NUMBER_OF_COURSES_SUCCESS:
            if (action.action === 'add') return state + 1;
            return state - 1;
        default:
            return state
    }
}