import React from 'react';
import {shallow} from 'enzyme';
import {ManageCoursePage} from '../../course/ManageCoursePage';
import * as actions from "../../../actions/course";

describe('Manage Course Page component', () => {
    it('should be selectable by class manageCourse', () => {
        const wrapper = shallow(<ManageCoursePage actions={actions} authors={[]} course={{}}/>);
        expect(wrapper.is('.manageCourse')).toBe(true);
    });
});