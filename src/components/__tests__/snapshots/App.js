import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json';
import {App} from '../../App';
describe('App Container Component', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<App totalCourses={4} totalAuthors={3} loading={false} courses={[]}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});