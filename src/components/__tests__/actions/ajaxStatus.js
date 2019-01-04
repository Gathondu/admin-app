import * as actions from '../../../actions/ajaxStatus';
import * as types from '../../../actionTypes/ajaxStatus';

describe('Ajax Status actions', () => {
    it('should begin ajax call', () => {
        const expectedAction = {type: types.BEGIN_AJAX_CALL};
        expect(actions.beginAjaxCall()).toEqual(expectedAction);
    });
    it('should error out', () => {
        const expectedAction = {type: types.AJAX_CALL_ERROR};
        expect(actions.ajaxCallError()).toEqual(expectedAction);
    });
});