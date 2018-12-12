import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from "./CourseListRow";

const CourseList = ({courses, deleteCourse}) => {
    const courseRows = courses.map((course, index) => (
        <CourseListRow
            course={course}
            key={course.id}
            index={index}
            deleteCourse={deleteCourse}
        />
    ));
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                </tr>
            </thead>
            <tbody>{courseRows}</tbody>
        </table>
    );
};

CourseList.propTypes = {
    courses: PropTypes.array.isRequired,
    deleteCourse: PropTypes.func.isRequired
};

export default CourseList;
