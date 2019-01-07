import React from 'react';
import {render} from 'enzyme';
import {BrowserRouter} from 'react-router-dom';
import {ManageAuthorPage} from '../../author/ManageAuthorPage';
import * as actions from "../../../actions/authors";

describe('Manage Author Page component', () => {
    it('should render correctly', () => {
        const wrapper = render(
            <BrowserRouter>
                <ManageAuthorPage actions={actions}/>
            </BrowserRouter>);
        console.log(wrapper.text());
        expect(wrapper.text()).toContain('First Name');
    });
});