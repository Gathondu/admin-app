import * as AjaxStatusActions from '../actionTypes/ajaxStatus';
import initialState from './initialState'

function actionTypeEndsInSuccess(type) {
    return type.substring(type.length -8) === '_SUCCESS';
}

/**
 * @return {number}
 */
export default function AjaxStatus(state=initialState.ajaxCallInProgress, action) {
    if (action.type === AjaxStatusActions.BEGIN_AJAX_CALL) {
        return state + 1;
    } else if (actionTypeEndsInSuccess(action.type)) {
        return state - 1;
    }
    return state;
}