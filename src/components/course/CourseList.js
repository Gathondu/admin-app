import React from "react";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import LoadingDots from '../common/LoadingDots';
import EmptyPage from '../common/EmptyPage';
import { connect } from 'react-redux';
import {deleteCourse} from '../../actions/course';

export const CourseList = ({ courses, deleteCourse, loading }) => {
  const courseRows = courses.map((course, index) => (
    <CourseListRow
      course={course}
      key={course.id}
      index={index}
      deleteCourse={deleteCourse}
    />
  ));
  if (courseRows.length > 0) {
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
  } else if (!loading) {
    return <EmptyPage />;
  } else {
      return <h3>Loading <LoadingDots interval={100} dots={20} /></h3>;
  }
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  deleteCourse: PropTypes.func.isRequired
};
export const mapStateToProps = state => (
    {
      courses: state.courses,
      loading: state.ajaxCallInProgress > 0
    }
);

export default connect(mapStateToProps, {deleteCourse})(CourseList);
