import React, {Fragment} from "react";
import PropTypes from "prop-types";
import CourseList from "./CourseList";

const CoursesPage = ({ history }) => {
    return <Fragment>
      <h1 key="title">Courses</h1>
      <input
        key="submit"
        type="submit"
        value="Add Course"
        className="btn btn-primary"
        onClick={() => history.push("/course")}
      />
      <CourseList key="course-list" />
    </Fragment>
  };

CoursesPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default CoursesPage;
