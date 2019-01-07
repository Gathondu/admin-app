import React from 'react';
import {render} from 'enzyme';
import {BrowserRouter} from 'react-router-dom';
import {ManageCoursePage} from '../../course/ManageCoursePage';
import * as actions from "../../../actions/course";

describe('Manage Course Page component', () => {
    it('should render correctly', () => {
        const wrapper = render(
            <BrowserRouter>
                <ManageCoursePage actions={actions} authors={[]} course={{}}/>
            </BrowserRouter>);
        expect(wrapper.text()).toContain('Title');
    });
});