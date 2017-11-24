import { take, put, call, apply } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import MSAL_Wrapper from "../api/msal_wrapper"
//import fetch from 'isomorphic-fetch';

import { GET_CURRENT_USER_INFO, setCurrentUser } from './../actions';

import { InvokeUrl } from "./utilitySagas";

export function* currentUserSaga() {

    const {id} = yield take(GET_CURRENT_USER_INFO);
    
    const responseC = yield call(InvokeUrl, 'https://localhost/NavigationAndProfile.WebApi/GetCurrentUserInfo', 'GET');

    const UserData = yield apply(responseC, responseC.json);
    console.log(UserData);
    var data = fromJS(({user:UserData}));
    yield put(setCurrentUser(data));
}

