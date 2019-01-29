import React from 'react';
import {shallow} from 'enzyme';
import {ManageAuthorPage} from '../../author/ManageAuthorPage';
import * as actions from "../../../actions/authors";

describe('Manage Author Page component', () => {
    it('should be selectable by class manageAuthor', () => {
        const wrapper = shallow(<ManageAuthorPage actions={actions}/>);
        expect(wrapper.is('.manageAuthor')).toBe(true);
    });
});