import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";


const AuthorListRow = ({author, deleteAuthor}) => {
    return (
        <tr>
            <td><i className="fa fa-trash" onClick={() => deleteAuthor(author.id)}/></td>
            <td><Link to={`/author/${author.id}`}>{author.firstName + ' ' + author.lastName}</Link></td>
        </tr>
    );
};

AuthorListRow.propTypes = {
    author: PropTypes.object.isRequired,
    deleteAuthor: PropTypes.func.isRequired
};
export default AuthorListRow;
