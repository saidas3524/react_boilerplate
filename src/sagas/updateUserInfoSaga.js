import { take, put, call, apply } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import MSAL_Wrapper from "../api/msal_wrapper"
//import fetch from 'isomorphic-fetch';

import { UPDATE_USER, setCurrentUser } from './../actions';

import { InvokeUrl } from "./utilitySagas";

export function* updateUserInfoSaga() {
    while (true) {
        const { userInfo } = yield take(UPDATE_USER);




        var data = fromJS((userInfo));
        yield put(setCurrentUser(data));
    }
}

// let removeLoginFunction = function *(){

// }