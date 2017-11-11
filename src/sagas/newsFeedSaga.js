import { take, call, put, apply } from "redux-saga/effects";
import fetch from "isomorphic-fetch";

import { fromJS } from 'immutable';


import { InvokeUrl } from "./utilitySagas";
import { SET_CURRENT_USER,setNewsFeed } from '../actions';

export function* newsFeedSaga() {
    try {

        var {UserID}   = yield take(SET_CURRENT_USER);  

        const responseC = yield call(InvokeUrl, `https://localhost/MS.IT.Oem.Provisioning.NavigationAndProfile.WebApi/GetMessagesById?userId=${UserID}`, 'GET');

        const newsFeed = yield apply(responseC, responseC.json);
        console.log(newsFeed);
        //var data = fromJS(({ user: UserData }));
        yield put(setNewsFeed(newsFeed));
    }
    catch (error) {
        throw error;
        return;
    }
}