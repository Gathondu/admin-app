import renderer from 'react-test-renderer';
import React from 'react'
import {App} from '../../App';
describe('App Container Component', () => {
    it('should not regress', () => {
        const tree = renderer.create(
            <App courses={[]} loading={false} totalAuthors={4} totalCourses={4} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});