import * as CourseActionTypes from "../actionTypes/course";
import initialState from "./initialState";

export default function Course(state = initialState.courses, action) {
  switch (action.type) {
    case CourseActionTypes.CREATE_COURSE_SUCCESS:
      return [...state, action.course];
    case CourseActionTypes.DELETE_COURSE_SUCCESS:
      return [
        ...state.splice(0, action.index),
        ...state.splice(action.index + 1)
      ];
    case CourseActionTypes.LOAD_COURSES_SUCCESS:
      return action.courses;
    case CourseActionTypes.UPDATE_COURSE_SUCCESS:
      return [...state.filter(course => course.id !== action.course.id), action.course];
    default:
      return state;
  }
}
