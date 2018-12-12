import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";

import * as courseActions from '../../actions/course'
import CourseForm from "./CourseForm";

class ManageCoursePage extends Component {
    static propTypes = {
        course: PropTypes.object.isRequired
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
                    allAuthors={[]}/>
        );
    }
}

const mapStateToProps = state => {
    let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
    return {course: course};
};
const mapDispatchToProps = dispatch => (
    {actions: bindActionCreators(courseActions, dispatch)}
);

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
