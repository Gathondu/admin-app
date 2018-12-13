import React, { Component } from "react";
import { connect } from "react-redux";
import { Prompt } from "react-router-dom";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import toastr from "toastr";
import * as courseActions from "../../actions/course";
import CourseForm from "./CourseForm";

class ManageCoursePage extends Component {
  static propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };
  state = {
    course: Object.assign({}, this.props.course),
    loading: false,
    errors: { title: "", author: "", category: "", length: "" },
    formIsValid: false,
    titleValid: false,
    authorValid: false,
    categoryValid: false,
    lengthValid: false,
    formUpdated: false
  };
  componentWillReceiveProps(nextProps) {
    if (this.props.course.id !== nextProps.course.id) {
      this.setState({ course: Object.assign({}, nextProps.course) });
    }
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (this.state.course !== nextState.course) {
      this.setState({ formUpdated: true });
    }
    return true;
  }

  validateInput = course => {
    let errors = {};
    for (var field in course) {
      if (course.hasOwnProperty(field)) {
        switch (field) {
          case "title":
            if (course["title"].length > 0) {
              this.setState({ titleValid: true });
            } else {
              errors["title"] = "Title should contain more than 1 character";
            }
            break;
          case "authorId":
            if (course["authorId"] !== "") {
              this.setState({ authorValid: true });
            } else {
              errors["authorId"] = "Please select one of the authors";
            }
            break;
          case "category":
            if (course["category"].length > 0) {
              this.setState({ categoryValid: true });
            } else {
              errors["category"] =
                "Category should contain more than 1 character";
            }
            break;
          case "length":
            if (
              course["length"].length > 0 &&
              course["length"].match(/\[a-zA-z]+/g) === null &&
              course["length"].match(/^(\d{1,2}):(\d{1,2})/g) !== null
            ) {
              this.setState({ lengthValid: true });
            } else {
              errors["length"] =
                "Length should neither be empty nor contain words. Just numbers and a colon in the format 04:40";
            }
            break;
          default:
            break;
        }
      }
    }
    if (Object.keys(errors).length > 0) {
      this.setState({ errors: errors });
    } else {
      this.setState({ errors: {}, formIsValid: true });
    }
  };

  updateCoursesState = e => {
    const field = e.target.name;
    let course = Object.assign({}, this.state.course);
    course[field] = e.target.value;
    this.validateInput(course);
    this.setState({ course: course });
  };

  saveCourse = e => {
    e.preventDefault();
    this.setState({ loading: true });
    this.validateInput(this.state.course);
    if (this.state.formIsValid) {
      this.setState({ formUpdated: false });
      this.props.actions
        .saveCourse(this.state.course)
        .then(() => this.redirect())
        .catch(error => {
          this.setState({ loading: false });
          toastr.error(error);
        });
    }
  };

  redirect = () => {
    this.setState({ loading: false });
    toastr.success("Course Saved.");
    this.props.history.push("/courses");
  };

  render() {
    return [
      <Prompt
        key="prompt"
        when={this.state.formUpdated}
        message="The form isn't saved, are you sure you want to leave the page?"
      />,
      <CourseForm
        key="form"
        course={this.state.course}
        errors={this.state.errors}
        allAuthors={this.props.authors}
        onChange={this.updateCoursesState}
        onSave={this.saveCourse}
        loading={this.state.loading}
        formIsValid={this.state.formIsValid}
      />
    ];
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
