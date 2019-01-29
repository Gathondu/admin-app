import React from 'react';
import {mount} from "enzyme";
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
    it('should mount in a full DOM', () => {
        const wrapper = mount(
            <App
                courses={[]}
                loading={false}
                totalCourses={4}
                totalAuthors={4}/>
        );
        expect(wrapper.find('.container').length).toBe(1);
    });
    it('should render / route correctly', () => {
        const component = renderRoutes('/');
        expect(component.find(HomePage)).toHaveLength(1)
    });
});
