import React from "react";
import PropTypes from "prop-types";

const Error = ({ text, type }) => {
  return (
    <div className="jumbotron">
      <h1 key="type">{type}</h1>
      <h3 key="text">{text}</h3>
    </div>
  );
};

Error.propTypes = {
  type: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

Error.defaultProps = {
  type: 404,
  text: "Page Not Found!"
};

export default Error;
