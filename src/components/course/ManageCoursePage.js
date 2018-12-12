import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

import * as courseActions from "../../actions/course";
//import * as authorActions from "../../actions/author";
import CourseForm from "./CourseForm";

class ManageCoursePage extends Component {
  static propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };
  state = {
    course: Object.assign({}, this.props.course),
    errors: {}
  };
  componentWillReceiveProps(nextProps) {
    if(this.props.course.id !== nextProps.course.id){
      this.setState({course: Object.assign({}, nextProps.course)})
    }
  }

  updateCoursesState = e => {
    const field = e.target.name;
    let course = Object.assign({}, this.state.course);
    course[field] = e.target.value;
    return this.setState({ course: course });
  };

  saveCourse = e => {
    e.preventDefault();
    this.props.actions.saveCourse(this.state.course);
    this.props.history.push("/courses");
  };

  render() {
    return (
      <CourseForm
        course={this.state.course}
        errors={this.state.errors}
        allAuthors={this.props.authors}
        onChange={this.updateCoursesState}
        onSave={this.saveCourse}
      />
    );
  }
}

const getCourseById = (courses, id) => {
  const course = courses.filter(course => course.id === id);
  if (course.length) return course[0];
  return null;
};
const mapStateToProps = (state, ownProps) => {
  const courseId = ownProps.match.params.id; // get this from path `/course/:id`
  let course = {
    id: "",
    watchHref: "",
    title: "",
    authorId: "",
    length: "",
    category: ""
  };
  if (courseId && state.courses.length > 0) {
    course = getCourseById(state.courses, courseId);
  }
  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + " " + author.lastName
    };
  });

  return {
    course: course,
    authors: authorsFormattedForDropdown
  };
};
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(courseActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageCoursePage);
