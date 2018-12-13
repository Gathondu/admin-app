import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {BrowserRouter, Route} from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import CoursesPage from "./course/CoursesPage";
import ManageCoursePage from './course/ManageCoursePage';
import {bindActionCreators} from "redux";
import * as CourseActions from '../actions/course';

class App extends Component {
    static propTypes = {
        courses: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired
    };

    render() {
        const { courses, loading, dispatch, totalCourses} = this.props;
        const deleteCourse = bindActionCreators(CourseActions.deleteCourse, dispatch);
        return (
            <BrowserRouter>
                <div className="container">
                    <Header loading={loading} totalCourses={totalCourses}/>
                    <Route exact path="/" render={() => <HomePage title="Administration" />}/>
                    <Route path="/courses" render={(props) =>
                        <CoursesPage {...props}
                                     title="Courses"
                                     courses={courses}
                                     deleteCourse={deleteCourse} loading={loading} />}
                    />
                    <Route exact path="/course" render={(props) => <ManageCoursePage {...props}/>}/>
                    <Route path="/course/:id" render={(props) => <ManageCoursePage {...props}/>}/>
                    <Route path="/about" render={() => <AboutPage title="About"/>}/>
                </div>
            </BrowserRouter>
        );
    }
}
const mapStateToProps = state => (
    {courses: state.courses, loading: state.ajaxCallsInProgress > 0, totalCourses: state.totalCourses}
);

export default connect(mapStateToProps)(App);
