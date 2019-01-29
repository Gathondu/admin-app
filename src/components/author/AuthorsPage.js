import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import AuthorList from "./AuthorList";

const AuthorsPage = (({history}) => {
    return <Fragment>
        <h1 key="title">Authors</h1>
        <input
            key="submit"
            type="submit"
            value="Add Author"
            className="btn btn-primary"
            onClick={() => history.push('/author')}
        />
        <AuthorList key="author-list"/>
    </Fragment>
});

AuthorsPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};

export default AuthorsPage;
