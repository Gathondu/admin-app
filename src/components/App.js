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
import AuthorsPage from "./author/AuthorsPage";
import ManageAuthorPage from "./author/ManageAuthorPage";

export class App extends Component {
    static propTypes = {
        courses: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired,
        totalCourses: PropTypes.number.isRequired,
        totalAuthors: PropTypes.number.isRequired
    };

    render() {
        const { loading, totalCourses, totalAuthors} = this.props;
        return (
            <BrowserRouter>
                <div className="container">
                    <Header loading={loading} totalCourses={totalCourses} totalAuthors={totalAuthors}/>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/authors" render={(props) => <AuthorsPage {...props}/>}/>
                        <Route exact path="/author" render={(props) => <ManageAuthorPage {...props}/>}/>
                        <Route exact path="/author/:id" render={(props) => <ManageAuthorPage {...props}/>}/>
                        <Route path="/courses" render={(props) => <CoursesPage {...props} />}/>
                        <Route exact path="/course" render={(props) => <ManageCoursePage {...props}/>}/>
                        <Route exact path="/course/:id" render={(props) => <ManageCoursePage {...props}/>}/>
                        <Route path="/about" component={AboutPage}/>
                        <Route component={Error}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
export const mapStateToProps = state => (
    {
        courses: state.courses,
        authors: state.authors,
        loading: state.ajaxCallsInProgress > 0,
        totalCourses: state.totalCourses,
        totalAuthors: state.totalAuthors
    }
);

export default connect(mapStateToProps)(App);
