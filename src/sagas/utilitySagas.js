import { take, select, call, put, apply } from "redux-saga/effects";
import fetch from "isomorphic-fetch";
import { SET_ACCESS_TOKEN } from "../actions";
import { accessTokenSelector } from "../selectors";
export function* InvokeUrl(url, method, data) {

    var accessToken = yield select(accessTokenSelector);
    if(!accessToken)
    {
        var result = yield take(SET_ACCESS_TOKEN);
        accessToken = result.accessToken;
    }
    const responseC = yield call(fetch, url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }
    });
    return responseC;
}
