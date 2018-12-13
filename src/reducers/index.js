import { combineReducers } from "redux";
import authors from "./authors";
import courses from "./course";
import ajaxCallsInProgress from './ajaxStatus';
import totalCourses from './totalCourses';
import totalAuthors from './totalAuthors'

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress,
  totalCourses,
  totalAuthors
});

export default rootReducer;
