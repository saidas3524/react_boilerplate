import { take, put, call, apply } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import MSAL_Wrapper from "../api/msal_wrapper"
//import fetch from 'isomorphic-fetch';

import { SAVE_USER_PROFILE, setSaveUserProfileStatus,SAVING,FAILED,SAVED } from './../actions';

import { InvokeUrl } from "./utilitySagas";

export function* saveUserProfileSaga() {
    while (true) {

        const { userInfo } = yield take(SAVE_USER_PROFILE);
        yield put(setSaveUserProfileStatus(SAVING));
        yield put(setSaveUserProfileStatus(SAVED));
       // yield put(setSaveProfileStatus(FAILED));
        //        call web api for this
      
     
    }
}

// let removeLoginFunction = function *(){

// }