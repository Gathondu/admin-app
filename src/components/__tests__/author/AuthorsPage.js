import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {AuthorsPage} from '../../author/AuthorsPage';


describe('Manage Author Page component', () => {
    const setup = () => {
        const props = {
            authors: [],
            loading: false,
            deleteAuthor: jest.fn(),
            history: {
                push: jest.fn()
            }
        };

        return {
            props,
            presentationWrapper: shallow(<AuthorsPage { ...props } />)
        };
    };
    it('should render correctly', () => {
        const {presentationWrapper} = setup();
        expect(toJson(presentationWrapper)).toMatchSnapshot();
    });
    it('should redirect to /author page', () => {
        const {presentationWrapper} = setup();
        const handleDeleteSpy = jest.spyOn(
            presentationWrapper.instance(), 'handleDeleteAuthor'
        );
        presentationWrapper.instance().handleDeleteAuthor('cory-house');
        expect(handleDeleteSpy).toHaveBeenCalled()
    });

    it('should redirect to /author page', () => {
        const {presentationWrapper, props} = setup();
        presentationWrapper.find('input').simulate('click');
        expect(props.history.push).toHaveBeenCalled()
    });
});