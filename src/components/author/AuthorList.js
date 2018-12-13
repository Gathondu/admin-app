import React from 'react';
import PropTypes from 'prop-types';
import EmptyPage from "../common/EmptyPage";
import LoadingDots from "../common/LoadingDots";
import AuthorListRow from "./AuthorListRow";

const AuthorList = ({authors, deleteAuthor, loading}) => {
    const authorRows = authors.map((author, index) => (
        <AuthorListRow
            author={author}
            key={author.id}
            index={index}
            deleteAuthor={deleteAuthor}
        />
    ));
    if (authorRows.length > 0) {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>{authorRows}</tbody>
            </table>
        );
    } else if (!loading) {
        return <EmptyPage text="No Authors to display. Please add an author to view."/>;
    } else {
        return <h3>Loading <LoadingDots interval={100} dots={20} /></h3>;
    }
};

AuthorList.propTypes = {
    authors: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    deleteAuthor: PropTypes.func.isRequired
};
export default AuthorList;
