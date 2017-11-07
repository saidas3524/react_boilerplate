import {take, put, call, apply} from 'redux-saga/effects';
import {fromJS} from 'immutable';
import MSAL_Wrapper from "../api/msal_wrapper"
//import fetch from 'isomorphic-fetch';

import {GET_CURRENT_USER_INFO, setAccessToken} from './../actions';

export function* accessTokenSaga() {
    console.log("access token  saga Invoked")
    const {id} = yield take(GET_CURRENT_USER_INFO);

    // debugger; const accestoken = yield
    // call(MSAL_Wrapper.clientApplication.acquireTokenSilent,
    // ['d1d9a68c-35e0-4ff5-ac06-3ef3dc438bc6']);
    try {
        const accessToken = yield call(MSAL_Wrapper.getAccessToken);
        console.log("accesstoken :" + accessToken);
        yield put(setAccessToken(accessToken));
        

    }
    catch (error) {
        MSAL_Wrapper.loginRedirect();
        return;
    }
}

