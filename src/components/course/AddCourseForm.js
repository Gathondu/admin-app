import React from 'react';
import PropTypes from 'prop-types';

let courseTitle = React.createRef();
let courseDescription = React.createRef();
const AddCourseForm = ({addCourse}) => {
    let handleSubmit = (e) => {
        e.preventDefault();
        addCourse(courseTitle.current.value, courseDescription.current.value);
        e.currentTarget.reset();
    };

    return (
        <>
        <h2>Add Course</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Course Title"
                ref={courseTitle} />
            <input
                type="text"
                placeholder="Course Description"
                ref={courseDescription} />
            <input
                type="submit"
                value="Save"/>
        </form>
        </>
    );
};

AddCourseForm.propTypes = {
    addCourse: PropTypes.func.isRequired
};

export default AddCourseForm;
