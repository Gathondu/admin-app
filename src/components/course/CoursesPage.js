import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AddCourseForm from "./AddCourseForm";
import Course from './Course';

class CoursesPage extends Component {
    render() {
        const {
            courses,
            addCourse,
            removeCourse
        } = this.props;
        const courseComponents = courses.map((course, index) => (
            <Course
                title={course.title}
                description={course.description}
                key={index}
                index={index}
                removeCourse={removeCourse}
            />
        ));
        return (
            [
                <h1>{this.props.title}</h1>,
                [courseComponents],
                <AddCourseForm addCourse={addCourse}/>]
        );
    }
}

CoursesPage.propTypes = {
    title: PropTypes.string.isRequired,
    courses:PropTypes.array.isRequired,
    addCourse: PropTypes.func.isRequired,
    removeCourse: PropTypes.func.isRequired
};

export default CoursesPage;
