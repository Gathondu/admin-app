import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {bindActionCreators} from "redux";
import {BrowserRouter, Route} from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import CoursesPage from "./course/CoursesPage";
import * as CourseActionCreators from '../actions/course'

class App extends Component {
    static propTypes = {
        courses: PropTypes.array.isRequired
    };

    render() {
        const { dispatch, courses} = this.props;
        const addCourse = bindActionCreators(CourseActionCreators.addCourse, dispatch);
        const removeCourse = bindActionCreators(CourseActionCreators.removeCourse, dispatch);

        return (
            <BrowserRouter>
                <div className="container">
                    <Header/>
                    <Route exact path="/" render={() => <HomePage title="Administration" />}/>
                    <Route path="/courses" render={() =>
                        <CoursesPage title="Courses"
                                     courses={courses}
                                     addCourse={addCourse}
                                     removeCourse={removeCourse}
                        />}/>
                    <Route path="/about" render={() => <AboutPage title="About"/>}/>
                </div>
            </BrowserRouter>
        );
    }
}
const mapStateToProps = state => (
    {courses: state.courses}
);

export default connect(mapStateToProps)(App);
