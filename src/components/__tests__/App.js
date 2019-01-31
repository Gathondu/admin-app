import React from 'react';
import {shallow} from "enzyme";
import toJson from 'enzyme-to-json';
import HomePage from "../home/HomePage";
import {App, mapStateToProps} from "../App";
import {Route} from "react-router-dom";
import Error from '../common/Error';
import AboutPage from "../about/AboutPage";

describe('App component', () => {
    const setup = () => {
        const props = {
            totalCourses: 4,
            totalAuthors: 3,
            loading: false,
            courses: []
        };
        return {
            props,
            wrapper: shallow(<App {...props}/>)
        }
    };
    it('should render without crashing', () => {
        const {wrapper} = setup();
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('should mount in a full DOM', () => {
        const {wrapper} = setup();
        expect(wrapper.find('.container').length).toBe(1);
    });
    it('should render routes correctly', () => {
        const {wrapper} = setup();
        const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
            const routeProps = route.props();
            pathMap[routeProps.path] = routeProps.component;
            return pathMap;
        }, {});
        expect(pathMap['/']).toBe(HomePage);
        expect(pathMap[undefined]).toBe(Error);
        expect(pathMap['/about']).toBe(AboutPage);
    });
    it('should map state to props correctly', () => {
        const {props} = setup();
        expect(mapStateToProps(props).totalCourses).toEqual(4);
    });
});
