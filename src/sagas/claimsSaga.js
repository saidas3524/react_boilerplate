import { take,select, call, put, apply } from "redux-saga/effects";
import fetch from "isomorphic-fetch";

import { fromJS } from 'immutable';
import { SET_ACCESS_TOKEN, setClaims } from '../actions';



import { accessTokenSelector } from "../selectors";


import { InvokeUrl } from "./utilitySagas";






export function* claimsSaga() {
    try {
        const responseC = yield call(InvokeUrl, 'https://localhost/NavigationAndProfile.WebApi/GetClaims', 'GET');

        const claimsData = yield apply(responseC, responseC.json);
        console.log("claimsData :" + claimsData);
        yield put(setClaims(claimsData));
    }
    catch (error) {
        throw error;
        return;
    }
}