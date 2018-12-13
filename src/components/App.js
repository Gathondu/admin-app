import React, { Component } from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import Error from "./common/Error";
import CoursesPage from "./course/CoursesPage";
import ManageCoursePage from './course/ManageCoursePage';
import {bindActionCreators} from "redux";
import * as CourseActions from '../actions/course';

class App extends Component {
    static propTypes = {
        courses: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired,
        totalCourses: PropTypes.number.isRequired,
        totalAuthors: PropTypes.number.isRequired
    };

    render() {
        const { courses, loading, dispatch, totalCourses, totalAuthors} = this.props;
        const deleteCourse = bindActionCreators(CourseActions.deleteCourse, dispatch);
        return (
            <BrowserRouter>
                <div className="container">
                    <Header loading={loading} totalCourses={totalCourses} totalAuthors={totalAuthors}/>
                    <Switch>
                        <Route exact path="/" render={() => <HomePage title="Administration" />}/>
                        <Route exact path="/courses" render={(props) =>
                            <CoursesPage {...props}
                                         title="Courses"
                                         courses={courses}
                                         deleteCourse={deleteCourse} loading={loading} />}
                        />
                        <Route exact path="/course" render={(props) => <ManageCoursePage {...props}/>}/>
                        <Route exact path="/course/:id" render={(props) => <ManageCoursePage {...props}/>}/>
                        <Route eaxct path="/about" render={() => <AboutPage title="About"/>}/>
                        <Route component={Error}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
const mapStateToProps = state => (
    {
        courses: state.courses,
        loading: state.ajaxCallsInProgress > 0,
        totalCourses: state.totalCourses,
        totalAuthors: state.totalAuthors
    }
);

export default connect(mapStateToProps)(App);
