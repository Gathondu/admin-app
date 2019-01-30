import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {CourseList, mapStateToProps} from "../../course/CourseList";
import EmptyPage from "../../common/EmptyPage";
import LoadingDots from "../../common/LoadingDots";
import CourseListRow from "../../course/CourseListRow";
import {courses} from "../../../api/mockCourse";

describe('CourseList Component', () => {
    const setup = () => {
        const props = {
            courses: courses,
            loading: false,
            deleteCourse: jest.fn()
        };

        return {
            props,
            presentationWrapper: shallow(<CourseList { ...props } />)
        };
    };
    const setupFalsy = () => {
        const props = {
            courses: [],
            loading: true,
            deleteCourse: jest.fn()
        };

        return {
            props,
            presentationWrapper: shallow(<CourseList { ...props } />)
        };
    };
    const setupEmpty = () => {
        const props = {
            courses: [],
            loading: false,
            deleteCourse: jest.fn()
        };

        return {
            props,
            presentationWrapper: shallow(<CourseList { ...props } />)
        };
    };
    it('should render correctly', () => {
        const {presentationWrapper} = setup();
        expect(toJson(presentationWrapper)).toMatchSnapshot();
    });
    it('should render courses list correctly', () => {
        const {presentationWrapper} = setup();
        expect(presentationWrapper.find(CourseListRow)).toHaveLength(5);
    });
    it('should load state correctly', () => {
        const {props} = setup();
        expect(mapStateToProps(props).courses).toHaveLength(5);
    });
    it('should show loading dots if loading is true', () => {
        const {presentationWrapper} = setupFalsy();
        expect(presentationWrapper.find(LoadingDots)).toHaveLength(1);
    });
    it('should show empty page if no courses to display', () => {
        const {presentationWrapper} = setupEmpty();
        expect(presentationWrapper.find(EmptyPage)).toHaveLength(1);
    });
});