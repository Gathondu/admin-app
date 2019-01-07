import React from 'react';
import {shallow} from "enzyme";
import {App} from '../App'

describe('App component', () => {
    it('should render without crashing', () => {
        shallow(
            <App
                courses={[]}
                loading={false}
                totalCourses={4}
                totalAuthors={4}/>
        );
    });
});
