import renderer from 'react-test-renderer';
import React from 'react';
import {BrowserRouter} from "react-router-dom";
import CourseForm from '../course/CourseForm';
import CourseList from '../course/CourseList';
import CourseListRow from '../course/CourseListRow';
import CoursesPage from '../course/CoursesPage';

describe('Course Components',()=>{
    describe('CourseForm Component', () => {
        it('should not regress', () => {
            const tree = renderer.create(
                <CourseForm onChange={()=>{}} onSave={()=>{}} course={{}} errors={{}} allAuthors={[]}/>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
    describe('CourseListRow Component', () => {
        it('should not regress', () => {
            const tree = renderer.create(
                <BrowserRouter>
                    <CourseListRow deleteCourse={()=>{}} course={{}}/>
                </BrowserRouter>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
    describe('CourseList Component', () => {
        it('should not regress', () => {
            const tree = renderer.create(
                <CourseList deleteCourse={()=>{}} courses={[]} loading={false}/>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
    describe('CoursesPage Component', () => {
        it('should not regress', () => {
            const tree = renderer.create(
                <CoursesPage deleteCourse={()=>{}} courses={[]} title={'test courses'} loading={false}/>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});