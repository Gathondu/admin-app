import React from 'react';
import {mount, shallow} from "enzyme";
import toJson from 'enzyme-to-json';
import HomePage from "../home/HomePage";
import {App} from "../App";
import {MemoryRouter} from "react-router-dom";
import configureStore from "../../store";
import {Provider} from "react-redux";

const store = configureStore();
const renderRoutes = path =>
    mount(
        <MemoryRouter initialEntries={[path]}>
            <Provider store={store}>
                <App totalCourses={4} totalAuthors={3} loading={false} courses={[]}/>
            </Provider>
        </MemoryRouter>
    );

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
    // it('should render routes correctly', () => {
    //     const component = renderRoutes('/');
    //     console.log(renderRoutes('/').debug());
    //     expect(component.find(HomePage)).toHaveLength(1)
    // });
});
