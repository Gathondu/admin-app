import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import AuthorListRow from "../../author/AuthorListRow";

describe('AuthorListRow Component',()=>{
    const setup = () => {
        const props = {
            author: {},
            deleteAuthor: jest.fn()
        };
        return {
            props,
            wrapper: shallow(<AuthorListRow {...props}/>)
        }
    };
    it('does not regress', ()=>{
        const {wrapper} = setup();
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should delete author correctly', () => {
        const {wrapper, props} = setup();
        wrapper.find('i').simulate('click');
        expect(props.deleteAuthor).toHaveBeenCalled()
    });
});