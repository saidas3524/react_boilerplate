import { createReducer } from './../utility';
import { fromJS} from 'immutable';
import {
    SET_RESOURCE_ACCESS_RIGHTS
} from '../actions'
export const accessRights = createReducer(null, {
    [SET_RESOURCE_ACCESS_RIGHTS](state,{accessRights}) {
        return fromJS(accessRights);
    }
});