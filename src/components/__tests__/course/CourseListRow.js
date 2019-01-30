import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import CourseListRow from "../../course/CourseListRow";

describe('CourseListRow Component', () => {
    const setup = () => {
        const props = {
            course: {},
            deleteCourse: jest.fn()
        };
        return {
            props,
            wrapper: shallow(<CourseListRow {...props}/>)
        }
    };
    it('does not regress', ()=>{
        const {wrapper} = setup();
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should delete course correctly', () => {
        const {wrapper, props} = setup();

        wrapper.find('.fa-trash').simulate('click');
        expect(props.deleteCourse).toHaveBeenCalled()
    });
});