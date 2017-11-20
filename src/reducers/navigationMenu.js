import { createReducer } from './../utility';
import { fromJS} from 'immutable';
import {
    SET_NAVIGATION_MENU
} from '../actions'
export const navigationMenu = createReducer(null, {
    [SET_NAVIGATION_MENU](state,{navigationMenu}) {
        return fromJS(navigationMenu);
    }
});