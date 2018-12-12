import React, { Component } from "react";
import PropTypes from "prop-types";
import CourseList from "./CourseList";

class CoursesPage extends Component {
  redirectToAddCoursePage = () => {
    this.props.history.push("/course");
  };
  render() {
    const { title, courses, deleteCourse, loading } = this.props;
    return [
      <h1 key="title">{title}</h1>,
      <input
        key="submit"
        type="submit"
        value="Add Course"
        className="btn btn-primary"
        onClick={this.redirectToAddCoursePage}
      />,
      <CourseList
        key="course-list"
        courses={courses}
        deleteCourse={deleteCourse}
        loading={loading}
      />
    ];
  }
}

CoursesPage.propTypes = {
  title: PropTypes.string.isRequired,
  courses: PropTypes.array.isRequired,
  deleteCourse: PropTypes.func.isRequired,
  loading: PropTypes.bool
};
CoursesPage.defaultProps = {
  title: "Courses"
};

export default CoursesPage;
