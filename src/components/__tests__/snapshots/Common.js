import renderer from 'react-test-renderer';
import React from 'react';
import {shallow} from 'enzyme';
import {BrowserRouter} from 'react-router-dom';
import EmptyPage from '../../common/EmptyPage';
import Error from '../../common/Error';
import Header from '../../common/Header';
import SelectInput from '../../common/SelectInput';
import TextInput from '../../common/TextInput';
import LoadingDots from "../../common/LoadingDots";
import {authors} from "../../../api/mockAuthor";

describe('Common Components',()=>{
    describe('EmptyPage Component',()=>{
        it('should not regress',()=>{
            const tree = renderer.create(
                <EmptyPage text={'test text'}/>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
    describe('ErrorPage Component',()=>{
        it('should not regress',()=>{
            const tree = renderer.create(
                <Error type={1} text={'test error'}/>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
    describe('Header Component',()=>{
        it('should not regress',()=>{
            const tree = renderer.create(
                <BrowserRouter>
                    <Header loading={true} totalCourses={4} totalAuthors={4}/>
                </BrowserRouter>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
    describe('SelectInput Component',()=>{
        it('should not regress',()=>{
            const tree = renderer.create(
                <SelectInput options={[]} label={'test label'} name={'test button name'} onChange={()=>{}}/>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
        it('should return options with given input', () => {
            const auths = authors.map(author => ({
                    value: author.id,
                    text: author.firstName + " " + author.lastName
                }));
            const props = {
                options: auths,
                label: 'test label',
                name: 'test button name',
                error: 'error',
                onChange: jest.fn()
            };
            const wrapper = shallow(<SelectInput {...props}/>);
            expect(wrapper.find('option')).toHaveLength(4);
        });
    });
    describe('TextInput Component',()=>{
        it('should not regress',()=>{
            const tree = renderer.create(
                <TextInput label={'test label'} onChange={()=>{}} name={'test input name'}/>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
        it('should show error', () => {
            const wrapper = shallow(<TextInput error={'error'} label={'test label'} onChange={()=>{}} name={'test input name'}/>);
            expect(wrapper.is('.has-error')).toBe(true);
        });
    });
    describe('LoadingDots Component', () => {
        it('should not regress', () => {
            const tree = renderer.create(
                <LoadingDots/>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});