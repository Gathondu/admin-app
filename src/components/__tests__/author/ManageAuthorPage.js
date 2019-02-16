import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {ManageAuthorPage, mapDispatchToProps, getAuthorById} from '../../author/ManageAuthorPage';
import {authors} from "../../../api/mockAuthor";


describe('Manage Author Page component', () => {
    const setup = () => {
        const props = {
            author: {
                firstName: '',
                lastName: ''
            },
            loading: false,
            errors: {},
            formIsValid: true,
            firstNameValid: true,
            lastNameValid: true,
            formUpdated: false,
            history: {
                push: jest.fn()
            }
        };

        return {
            props,
            wrapper:
                shallow(
                    <ManageAuthorPage {...props}/>)
        };
    };
    it('should not regress', () => {
        const {wrapper} = setup();
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should validate user input correctly', () => {
        const {wrapper, props} = setup();
        const spy = jest.spyOn(wrapper.instance(), 'validateInput');
        wrapper.instance().validateInput(props.author);
        expect(spy).toHaveBeenCalled();
    });
    it('should update author state', () => {
        const {wrapper} = setup();
        const spy = jest.spyOn(wrapper.instance(), 'updateAuthorState');
        wrapper.instance().updateAuthorState({ target: {value: 'denis'}});
        expect(spy).toHaveBeenCalled();
    });
    it('should save author correctly', () => {
        const {wrapper} = setup();
        const spy = jest.spyOn(wrapper.instance(), 'saveAuthor');
        wrapper.instance().saveAuthor({preventDefault: () => {}});
        expect(spy).toHaveBeenCalled();
    });
    it('should redirect', () => {
        const {wrapper, props} = setup();
        wrapper.instance().redirect();
        expect(props.history.push).toHaveBeenCalled();
    });
    it('should get author by id', () => {
        const cory = {
            id: 'cory-house',
            firstName: 'Cory',
            lastName: 'House'
        };
        expect(getAuthorById(authors, 'cory-house')).toEqual(cory);
        expect(getAuthorById(authors, 'cory')).toEqual(null);
    });
    it('should map dispatch to props', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).actions.loadAuthorsSuccess();
        expect(dispatch.mock.calls[0][0]).toEqual({"authors": undefined, "type": "LOAD_AUTHORS_SUCCESS"});
    });
});