import { combineReducers } from "redux";
import authors from "./author";
import courses from "./course";

const rootReducer = combineReducers({
  courses,
  authors
});

export default rootReducer;
