import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import AuthorList from "./AuthorList";
import  {deleteAuthor} from "../../actions/authors";
import {connect} from "react-redux";

export class AuthorsPage extends Component {
    handleDeleteAuthor = (id) => {
        this.props.deleteAuthor(id)
    };
    render () {
        const {authors, loading, history} = this.props;
        return <Fragment>
            <h1 key="title">Authors</h1>
            <input
                key="submit"
                type="submit"
                value="Add Author"
                className="btn btn-primary"
                onClick={() => history.push('/author')}
            />
            <AuthorList
                key="author-list"
                authors={authors}
                deleteAuthor={this.handleDeleteAuthor}
                loading={loading}
            />
        </Fragment>
    }
}

AuthorsPage.propTypes = {
    authors: PropTypes.array.isRequired,
    deleteAuthor: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};
const mapStateToProps = ({authors, totalAuthors, ajaxCallsInProgress}) => (
    {
        authors,
        loading: ajaxCallsInProgress > 0,
        totalAuthors
    }
);

export default connect(mapStateToProps, {deleteAuthor})(AuthorsPage);
