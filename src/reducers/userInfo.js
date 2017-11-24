import { createReducer } from './../utility';
import { fromJS} from 'immutable'
import {
    SET_USER
} from '../actions'
export const userInfo = createReducer(null, {
    [SET_USER](state,{userInfo}) {
        return fromJS(userInfo);
    }
});