import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {ManageCoursePage, mapDispatchToProps, getCourseById} from '../../course/ManageCoursePage';
import {courses} from "../../../api/mockCourse";

describe('Manage Course Page component', () => {
    const setup = () => {
        const props = {
            course: {
                id: '',
                title: '',
                watchHref: '',
                authorId: '',
                length: '',
                category: ''
            },
            authors: [],
            loading: false,
            errors: {},
            formIsValid: true,
            titleValid: true,
            authorValid: true,
            categoryValid: true,
            lengthValid: true,
            formUpdated: false,
            history: {
                push: jest.fn()
            }
        };

        return {
            props,
            wrapper:
                shallow(
                    <ManageCoursePage {...props}/>)
        };
    };
    it('should not regress', () => {
        const {wrapper} = setup();
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should validate user input correctly', () => {
        const {wrapper, props} = setup();
        const spy = jest.spyOn(wrapper.instance(), 'validateInput');
        wrapper.instance().validateInput(props.course);
        expect(spy).toHaveBeenCalled();
    });
    it('should update course state', () => {
        const {wrapper} = setup();
        const spy = jest.spyOn(wrapper.instance(), 'updateCoursesState');
        wrapper.instance().updateCoursesState({ target: {value: 'denis'}});
        expect(spy).toHaveBeenCalled();
    });
    it('should save course correctly', () => {
        const {wrapper} = setup();
        const spy = jest.spyOn(wrapper.instance(), 'saveCourse');
        wrapper.instance().saveCourse({preventDefault: () => {}});
        expect(spy).toHaveBeenCalled();
    });
    it('should redirect', () => {
        const {wrapper, props} = setup();
        wrapper.instance().redirect();
        expect(props.history.push).toHaveBeenCalled();
    });
    it('should get course by id', () => {
        const javascript = {
            id: "react-flux-building-applications",
            title: "Building Applications in React and Flux",
            watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
            authorId: "cory-house",
            length: "5:08",
            category: "JavaScript"
        };
        expect(getCourseById(courses, 'react-flux-building-applications')).toEqual(javascript);
        expect(getCourseById(courses, 'rest')).toEqual(null);
    });
    it('should map dispatch to props', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).actions.loadCoursesSuccess();
        expect(dispatch.mock.calls[0][0]).toEqual({"courses": undefined, "type": "LOAD_COURSES_SUCCESS"});
    });
});