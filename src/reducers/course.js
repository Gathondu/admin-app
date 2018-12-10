import * as CourseActionTypes from '../actionTypes/course'

const initialState = [
    {
        title: 'React',
        description: `This course get's you up to speed with React.`
    }
];

export default function Course(state=initialState, action) {
    switch (action.type) {
        case CourseActionTypes.ADD_COURSE:
            return [
                ...state,
                {
                    title: action.title,
                    description: action.description
                }
            ];
        case CourseActionTypes.REMOVE_COURSE:
            return [
                ...state.splice(0, action.index),
                ...state.splice(action.index + 1)
            ];
        default:
            return state;
    }
}