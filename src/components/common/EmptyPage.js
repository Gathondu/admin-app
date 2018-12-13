import React from "react";
import PropTypes from "prop-types";

const EmptyPage = ({text}) => {
  return (
    <div className="jumbotron">
      <i className="fa fa-ban fa-5x" aria-hidden="true" />
      <h2>{text}</h2>
    </div>
  );
};

  EmptyPage.propTypes = {
      text: PropTypes.string.isRequired
  };

  EmptyPage.defaultProps = {
      text: "No Courses to display. Add course to view"
  };

export default EmptyPage;
