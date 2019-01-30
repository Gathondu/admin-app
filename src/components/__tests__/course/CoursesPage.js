import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import CoursesPage from "../../course/CoursesPage";

describe('CoursesPage Component', () => {
    const setup = () => {
      const props = {
            history: {
                push: jest.fn()
            }
        };

      return {
          props,
          wrapper: shallow(<CoursesPage {...props}/>)
      }
    };
    it('should not regress', () => {
        const {wrapper} = setup();
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should redirect to /course page', () => {
        const {wrapper, props} = setup();
        wrapper.find('input').simulate('click');
        expect(props.history.push).toHaveBeenCalled()
    });
});