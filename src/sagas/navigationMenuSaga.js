import { take,call, put,apply } from "redux-saga/effects";
//import fetch from "isomorphic-fetch";
import {} from "../utility"
import {fromJS} from 'immutable';
import MSAL_Wrapper from "../api/msal_wrapper"

import { SET_ACCESS_TOKEN, setNavigationMenu,setCurrentUser } from '../actions';

import { InvokeUrl } from "./utilitySagas";

export function* navigationMenuSaga() {
    try {
        const { accessToken } = yield take(SET_ACCESS_TOKEN);

        const response = yield call(InvokeUrl, 'https://api.microsoftoem.net/Companyaad/royd/v1/GetNavigation', 'GET');
        const navData = yield apply(response, response.json);
        var updatedMenu = navData.Items.map(function(d) {
            var dinner1 = d.Items.map(function(d1){ 
            var dinner2 = d1.Items.map(function(d2){ 
            var dinner3 = d2.Items.map(function(d3){ 
            return { text: d3.DisplayText, key: d3.ItemKey, href: d3.NaviationUri};});
            return { text: d2.DisplayText, key: d2.ItemKey, href: d2.NaviationUri,menuItems :dinner3};});
            
            return { text: d1.DisplayText, key: d1.ItemKey, href: d1.NaviationUri,menuItems :dinner2};});
            return {buttonText: d.DisplayText, key: d.ItemKey,menuItems :dinner1}});
            console.log(JSON.stringify(updatedMenu));

        
        console.log("navData :" + updatedMenu);
        yield put(setNavigationMenu(updatedMenu));
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
        //MSAL_Wrapper.loginRedirect();
        //throw error;
        console.log("navigationMenuSage "+error);
        return;
    }
}