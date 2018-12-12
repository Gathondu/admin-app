import * as AjaxStatusActions from '../actionTypes/ajaxStatus';

export function beginAjaxCall() {
    return {type: AjaxStatusActions.BEGIN_AJAX_CALL};
}