import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AuthorList from "./AuthorList";

class AuthorsPage extends Component {
    redirectToAddAuthorPage = () => {
        this.props.history.push('/author');
    };
    render() {
        //destructure props
        const {title, authors, deleteAuthor, loading} = this.props;
        return [
            <h1 key="title">{title}</h1>,
            <input
                key="submit"
                type="submit"
                value="Add Author"
                className="btn btn-primary"
                onClick={this.redirectToAddAuthorPage}
            />,
            <AuthorList
                key="author-list"
                authors={authors}
                deleteAuthor={deleteAuthor}
                loading={loading}
            />
        ];
    }
}

AuthorsPage.propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    deleteAuthor: PropTypes.func.isRequired,
    loading: PropTypes.bool
};
AuthorsPage.defaultProps = {
    title: "Authors"
};

export default AuthorsPage;
