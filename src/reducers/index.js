import { combineReducers } from "redux";
import authors from "./author";
import courses from "./course";
import ajaxCallsInProgress from './ajaxStatus'
import totalCourses from './totalCourses'

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress,
  totalCourses
});

export default rootReducer;
