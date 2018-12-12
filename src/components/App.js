import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {Router, Route} from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import CoursesPage from "./course/CoursesPage";
import ManageCoursePage from './course/ManageCoursePage';
import * as CourseActionCreators from '../actions/course'
import history from './common/History'

class App extends Component {
    static propTypes = {
        courses: PropTypes.array.isRequired
    };

    render() {
        const { dispatch, courses} = this.props;
        const addCourse = bindActionCreators(CourseActionCreators.createCourseSuccess, dispatch);
        const removeCourse = bindActionCreators(CourseActionCreators.deleteCourseSuccess, dispatch);

        return (
            <Router history={history}>
                <div className="container">
                    <Header/>
                    <Route exact path="/" render={() => <HomePage title="Administration" />}/>
                    <Route path="/courses" render={() =>
                        <CoursesPage title="Courses"
                                     courses={courses}
                                     addCourse={addCourse}
                                     removeCourse={removeCourse}
                        />}/>
                    <Route exact path="/course" render={() => <ManageCoursePage />}/>
                    <Route path="/course/:id" render={() => <ManageCoursePage />}/>
                    <Route path="/about" render={() => <AboutPage title="About"/>}/>
                </div>
            </Router>
        );
    }
}
const mapStateToProps = state => (
    {courses: state.courses}
);

export default connect(mapStateToProps)(App);
