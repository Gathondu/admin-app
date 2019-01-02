import renderer from 'react-test-renderer';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import EmptyPage from '../common/EmptyPage';
import Error from '../common/Error';
import Header from '../common/Header';
import SelectInput from '../common/SelectInput';
import TextInput from '../common/TextInput';

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
                    <Header loading={false} totalCourses={4} totalAuthors={4}/>
                </BrowserRouter>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        })
    });
    describe('SelectInput Component',()=>{
        it('should not regress',()=>{
            const tree = renderer.create(
                <SelectInput options={[]} label={'test label'} name={'test button name'} onChange={()=>{}}/>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
    describe('TextInput Component',()=>{
        it('should not regress',()=>{
            const tree = renderer.create(
                <TextInput label={'test label'} onChange={()=>{}} name={'test input name'}/>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});