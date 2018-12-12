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
    authors: PropTypes.array.isRequired
  };
  state = {
    course: Object.assign({}, this.props.course),
    errors: {}
  };

  render() {
    return (
      <CourseForm
        course={this.state.course}
        errors={this.state.errors}
        allAuthors={this.props.authors}
      />
    );
  }
}

const mapStateToProps = state => {
  let course = {
    id: "",
    watchHref: "",
    title: "",
    authorId: "",
    length: "",
    category: ""
  };

  const authorsFormattedForDropdown = state.authors.map(author => {
      return {
          value: author.id,
          text: author.firstName + ' ' + author.lastName
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
