import { take,call, put,apply } from "redux-saga/effects";
import fetch from "isomorphic-fetch";

import {fromJS} from 'immutable';


import { setClaims,SET_CLAIMS } from '../actions';

export function* newsFeedSaga() {
    try {
        const { claims } = yield take(SET_CLAIMS);

        const responseC = yield call(fetch, 'https://api.microsoftoem.net/Companyaad/royd/v1/GetClaims', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        });

        const claimsData = yield apply(responseC, responseC.json);
        console.log("claimsData :" + claimsData);
        yield put(setClaims(claimsData));
    }
    catch (error) {
        throw error;
        return;
    }
}