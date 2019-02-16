import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import {AuthorList, mapStateToProps} from "../../author/AuthorList";
import {authors} from "../../../api/mockAuthor";
import AuthorListRow from "../../author/AuthorListRow";
import LoadingDots from "../../common/LoadingDots";
import EmptyPage from "../../common/EmptyPage";


describe('AuthorList Component',()=>{
    const setup = () => {
        const props = {
            authors: authors,
            loading: false,
            deleteAuthor: jest.fn()
        };

        return {
            props,
            presentationWrapper: shallow(<AuthorList { ...props } />)
        };
    };
    const setupFalsy = () => {
        const props = {
            authors: [],
            loading: true,
            deleteAuthor: jest.fn()
        };

        return {
            props,
            presentationWrapper: shallow(<AuthorList { ...props } />)
        };
    };
    const setupEmpty = () => {
        const props = {
            authors: [],
            loading: false,
            deleteAuthor: jest.fn()
        };

        return {
            props,
            presentationWrapper: shallow(<AuthorList { ...props } />)
        };
    };
    it('should render correctly', () => {
        const {presentationWrapper} = setup();
        expect(toJson(presentationWrapper)).toMatchSnapshot();
    });
    it('should render authors list correctly', () => {
        const {presentationWrapper} = setup();
        expect(presentationWrapper.find(AuthorListRow)).toHaveLength(3);
    });
    it('should load state correctly', () => {
        const {props} = setup();
        expect(mapStateToProps(props).authors).toHaveLength(3);
    });
    it('should show loading dots if loading is true', () => {
        const {presentationWrapper} = setupFalsy();
        expect(presentationWrapper.find(LoadingDots)).toHaveLength(1);
    });
    it('should show empty page if no authors to display', () => {
        const {presentationWrapper} = setupEmpty();
        expect(presentationWrapper.find(EmptyPage)).toHaveLength(1);
    });
});