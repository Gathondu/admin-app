import { combineReducers } from "redux";
import authors from "./author";
import courses from "./course";
import ajaxCallsInProgress from './ajaxStatus'

const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
