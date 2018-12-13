import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import LoadingDots from "./LoadingDots";

const Header = ({ loading, totalCourses }) => {
  return (
    <nav>
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeClassName="active">
        Courses
      </NavLink>
        <span>&nbsp;</span>
      <span>{totalCourses}</span>
      {" | "}
      <NavLink to="/about" activeClassName="active">
        About
      </NavLink>
      {loading && <LoadingDots interval={100} dots={20} />}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  totalCourses: PropTypes.number.isRequired
};

export default Header;
