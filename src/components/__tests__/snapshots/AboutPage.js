import renderer from 'react-test-renderer';
import AboutPage from "../../about/AboutPage";
import React from "react";

describe('The About Page Component', () => {
    it('It does not regress',() => {
        const title = 'About Test';
        const rendered = renderer.create(
            <AboutPage title={title} />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});