import { createReducer } from './../utility';
import { fromJS} from 'immutable';
import {
    SET_CLAIMS
} from '../actions'
export const claims = createReducer(null, {
    [SET_CLAIMS](state,{claims}) {
        return fromJS(claims);
    }
});