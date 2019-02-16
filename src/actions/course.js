import * as CourseActionTypes from "../actionTypes/course";
import courseApi from "../api/mockCourse";
import { ajaxCallError, beginAjaxCall } from "./ajaxStatus";
import toastr from "toastr";

export const createCourseSuccess = course => {
  return { type: CourseActionTypes.CREATE_COURSE_SUCCESS, course };
};

export const deleteCourseSuccess = id => {
  return { type: CourseActionTypes.DELETE_COURSE_SUCCESS, id };
};

export const loadCoursesSuccess = courses => {
  return { type: CourseActionTypes.LOAD_COURSES_SUCCESS, courses };
};

export const updateCourseSuccess = course => {
  return { type: CourseActionTypes.UPDATE_COURSE_SUCCESS, course };
};

export const getNumberOfCoursesSuccess = total => {
  return { type: CourseActionTypes.GET_NUMBER_OF_COURSES_SUCCESS, total };
};

export const updateTotalCourses = action => {
  return { type: CourseActionTypes.UPDATE_NUMBER_OF_COURSES_SUCCESS, action };
};

export function loadCourses() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi
      .getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
        dispatch(getNumberOfCoursesSuccess(courses.length));
      });
  };
}

export function saveCourse(course) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return courseApi
      .saveCourse(course)
      .then(savedCourse => {
        if (course.id) {
          dispatch(updateCourseSuccess(savedCourse));
        } else {
          dispatch(createCourseSuccess(savedCourse));
          dispatch(updateTotalCourses("add"));
        }
      })
      .catch(error => {
        dispatch(ajaxCallError(error));
        throw error;
      });
  };
}

export function deleteCourse(id) {
  return function(dispatch) {
    dispatch(deleteCourseSuccess(id));
    return courseApi
      .deleteCourse(id)
      .then(
        dispatch(updateTotalCourses("delete")),
        toastr.success("Course Deleted.")
      );
  };
}
