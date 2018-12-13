import React from 'react';
import PropTypes from 'prop-types';
import TextInput from "../common/TextInput";

const AuthorForm = ({author,errors,onChange,loading, formIsValid, onSave}) => {
    return (
        <form>
            <h1>Manage Author</h1>
            <TextInput
                label="First Name"
                onChange={onChange}
                name="firstName"
                value={author.firstName}
                error={errors.firstName}
                placeholder="Enter First Name"/>
            <TextInput
                label="Last Name"
                onChange={onChange}
                name="lastName"
                value={author.lastName}
                error={errors.lastName}
                placeholder="Enter Course Category"/>
            <input
                type="submit"
                disabled={loading || !formIsValid}
                value={loading ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}/>
        </form>
    );
};

AuthorForm.propTypes = {
    author: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    formIsValid: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
};

export default AuthorForm;
