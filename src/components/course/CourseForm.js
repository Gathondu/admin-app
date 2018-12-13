import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput'
import SelectInput from '../common/SelectInput'

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors, formIsValid}) => {
    return (
        <form>
            <h1>Manage Course</h1>
            <TextInput
                label="Title"
                onChange={onChange}
                name="title"
                value={course.title}
                error={errors.title}
                placeholder="Enter Course Title"/>
            <SelectInput
                label="Author"
                onChange={onChange}
                name="authorId"
                value={course.authorId}
                defaultOption="Select Author"
                options={allAuthors}
                error={errors.authorId}/>
            <TextInput
                label="Category"
                onChange={onChange}
                name="category"
                value={course.category}
                error={errors.category}
                placeholder="Enter Course Category"/>
            <TextInput
                label="Length"
                onChange={onChange}
                name="length"
                value={course.length}
                error={errors.length}
                placeholder="Enter Course Length"/>
            <input
                type="submit"
                disabled={loading || !formIsValid}
                value={loading ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}/>
        </form>
    );
};

CourseForm.propTypes = {
    course: PropTypes.object.isRequired,
    allAuthors: PropTypes.array,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    errors: PropTypes.object
};
export default CourseForm;
