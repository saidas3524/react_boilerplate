import { createReducer } from './../utility';
import { fromJS} from 'immutable';
import {
    SAVE_USER_PROFILE_STATUS,SAVE_USER_PROFILE_MESSAGE,SAVE_USER_PROFILE_VALIDATION_STATUS
} from '../actions'
export const saveProfileStatus = createReducer(null, {
    [SAVE_USER_PROFILE_STATUS](state,{status}) {
       console.info("this is saving profile",status);
        return fromJS(status);
    }
});

export const saveProfileMessage = createReducer(null, {
    [SAVE_USER_PROFILE_MESSAGE](state,{message}) {
       console.info("this is saving profile message state ",state);
       console.info("this is saving profile message message ",message);
        return fromJS(message);
    }
});

export const saveProfileValidationStatus = createReducer(null, {
    [SAVE_USER_PROFILE_VALIDATION_STATUS](state,{validationstatus}) {
       console.info("this is saving profile message message ",validationstatus);
        return fromJS(validationstatus);
    }
});