import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CourseForm from "./CourseForm";
import CourseList from './CourseList';

class CoursesPage extends Component {
    render() {
        const {
            title,
            courses,
            addCourse,
            removeCourse
        } = this.props;
        return (
            [
                <h1 key="title">{title}</h1>,
                <CourseList key="course-list" courses={courses} removeCourse={removeCourse}/>,
                <CourseForm key="form" addCourse={addCourse}/>]
        );
    }
}

CoursesPage.propTypes = {
    title: PropTypes.string.isRequired,
    courses:PropTypes.array.isRequired,
    addCourse: PropTypes.func.isRequired,
    removeCourse: PropTypes.func.isRequired
};
CoursesPage.defaultProps = {
    title: "Courses"
};

export default CoursesPage;
