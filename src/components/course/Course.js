import React from 'react';
import PropTypes from 'prop-types';

const Course = ({title, description, index, removeCourse}) => {
    return (
        <div className="course">
            <span className="course-title">
                <button className="remove-course" onClick={() => removeCourse(index)}>×</button>
                {title}
                <br/>
                {description}
            </span>
        </div>
    );
};

Course.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    removeCourse: PropTypes.func.isRequired
};

export default Course;
