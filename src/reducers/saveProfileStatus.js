import { createReducer } from './../utility';
import { fromJS} from 'immutable';
import {
    SAVE_USER_PROFILE_STATUS
} from '../actions'
export const saveProfileStatus = createReducer(null, {
    [SAVE_USER_PROFILE_STATUS](state,{status}) {
        return fromJS(status);
    }
});