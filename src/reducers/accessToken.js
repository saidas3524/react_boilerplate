import { createReducer } from './../utility';
import { fromJS} from 'immutable';
import {
    SET_ACCESS_TOKEN
} from '../actions'
export const accessToken = createReducer(null, {
    [SET_ACCESS_TOKEN](state,{accessToken}) {
        return fromJS(accessToken);
    }
});