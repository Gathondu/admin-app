import renderer from 'react-test-renderer';
import React from 'react';
import {BrowserRouter} from "react-router-dom";
import HomePage from "../../home/HomePage";

describe('HomePage Component', () => {
    it('should not regress', () => {
        const tree = renderer.create(
            <BrowserRouter>
                <HomePage title={'test title'}/>
            </BrowserRouter>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});