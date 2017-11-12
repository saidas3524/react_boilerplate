import { take,select, call, put, apply } from "redux-saga/effects";
import fetch from "isomorphic-fetch";

import { fromJS } from 'immutable';
import MSAL_Wrapper from "../api/msal_wrapper"

import { SET_ACCESS_TOKEN, setClaims } from '../actions';



import { accessTokenSelector } from "../selectors";


import { InvokeUrl } from "./utilitySagas";






export function* claimsSaga() {
    try {
       // const { accessToken } = yield take(SET_ACCESS_TOKEN);

        // const responseC = yield call(fetch, 'https://api.microsoftoem.net/Companyaad/royd/v1/GetClaims', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json',
        //         'Authorization': `Bearer ${accessToken}`
        //     }
        // });
        const responseC = yield call(InvokeUrl, 'https://api.microsoftoem.net/Companyaad/royd/v1/GetClaims', 'GET');
        const claimsData = yield apply(responseC, responseC.json);
        console.log("claimsData :" + claimsData);
        yield put(setClaims(claimsData));
    }
    catch (error) {
        throw error;
        return;
    }
}