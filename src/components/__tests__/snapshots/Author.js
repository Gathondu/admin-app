import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
import AuthorForm from '../../author/AuthorForm';
import AuthorList from '../../author/AuthorList';
import AuthorListRow from '../../author/AuthorListRow';
import AuthorsPage from '../../author/AuthorsPage';
import {ManageAuthorPage} from "../../author/ManageAuthorPage";

describe('Author Components',() => {
    describe('AuthorForm Component', () => {
        it('Does not regress', () => {
            const props = {
                loading: true,
                onChange: ()=>{},
                formIsValid: true,
                onSave: ()=>{},
                author: {
                    firstName: 'first',
                    lastName: 'last'
                },
                errors: {
                    firstName: 'first error',
                    lastName: 'last error'
                }
            };
            const tree = renderer.create(
                <AuthorForm loading={props.loading}
                            onChange={props.onChange}
                            formIsValid={props.formIsValid}
                            onSave={props.onSave}
                            author={props.author}
                            errors={props.errors}/>
            );
            expect(tree.toJSON()).toMatchSnapshot();
        });
    });
    describe('AuthorListRow Component',()=>{
        it('does not regress',()=>{
            const tree = renderer.create(
                <BrowserRouter>
                    <AuthorListRow author={{firstName: 'first', lastName:'last'}}
                               deleteAuthor={()=>{}}/>
                </BrowserRouter>
            );
            expect(tree.toJSON()).toMatchSnapshot();
        });
    });
    describe('AuthorList Component',()=>{
        it('should not regress',()=>{
            const tree = renderer.create(
                <AuthorList loading={true} deleteAuthor={()=>{}} authors={[]}/>
            );
            expect(tree.toJSON()).toMatchSnapshot();
        });
    });
    describe('AuthorsPage Component',()=>{
        it('should not regress',()=>{
            const tree = renderer.create(
                <AuthorsPage loading={false} authors={[]} deleteAuthor={()=>{}} title={'Test Title'}/>
            );
            expect(tree.toJSON()).toMatchSnapshot();
        });
    });
    describe('ManageAuthorPage Component', () => {
        it('should not regress', () => {
            const tree = renderer.create(
                <BrowserRouter>
                    <ManageAuthorPage actions={{}}/>
                </BrowserRouter>
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});