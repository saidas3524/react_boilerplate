import { take,call, put,apply } from "redux-saga/effects";
import fetch from "isomorphic-fetch";

import {fromJS} from 'immutable';
import MSAL_Wrapper from "../api/msal_wrapper"

import { SET_ACCESS_TOKEN, setNavigationMenu,setCurrentUser } from '../actions';

import { InvokeUrl } from "./utilitySagas";

export function* navigationMenuSaga() {
    try {
        const { accessToken } = yield take(SET_ACCESS_TOKEN);

        const response = yield call(InvokeUrl, 'https://api.microsoftoem.net/Companyaad/royd/v1/GetNavigation', 'GET');

        const navData = yield apply(response, response.json);
        console.log("navData :" + navData);
        yield put(setNavigationMenu(navData));
        var data = fromJS({
            user: {
                name: "Sai Krishna Dasoju",
                newsFeed: [
                    {
                        Id: "1",
                        title: "Microsoft Hikes",
                        message: "test message test message test messagetest message test messagetest message test" +
                                " messagetest message test message test message test message test messagetest mes" +
                                "sage test messagetest message test messagetest message test messagetest message " +
                                "test message test messagetest message test messagetest message test messagetest " +
                                "message test messagetest message test message test messagetest message test mess" +
                                "agetest message test messagetest message test messagetest message test message t" +
                                "est messagetest message test messagetest message test messagetest message test m" +
                                "essage"
                    }, {
                        Id: "2",
                        title: "Microsoft Hike3s",
                        message: "test test message test message test messagetest message test messagetest message" +
                                " test messagetest message test messagetest message test message test messagetest" +
                                " message test messagetest message test messagetest message test messagetest mess" +
                                "age test message test messagetest message test messagetest message test messaget" +
                                "est message test messagemessage test message test messagetest message test messa" +
                                "getest message test messagetest message test message"
                    }, {
                        Id: "3",
                        title: "Microsoft Hike4s",
                        message: "test message testtest message test message test messagetest message test message" +
                                "test message test messagetest message test messagetest message test message test" +
                                " messagetest message test messagetest message test messagetest message test mess" +
                                "agetest message test message test messagetest message test messagetest message t" +
                                "est messagetest message test message message test messagetest message test messa" +
                                "getest message test messagetest message test message"
                    }

                ]
            }
        });
        yield put(setCurrentUser(data));
    }
    catch (error) {
        MSAL_Wrapper.loginRedirect();
        throw error;
        return;
    }
}