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
            return { text: d3.DisplayText, key: d3.ItemKey, href: d3.NaviationUri,platform: d3.Paltform };});
          
            var dinner3Filtered  = dinner3.filter( (d)=> { return d.platform == "OAPlatform"})
            // console.log("un filtered : " + JSON.stringify(dinner3));
            // console.log("filtered : " + JSON.stringify(dinner3Filtered));
            return { text: d2.DisplayText, key: d2.ItemKey, href: d2.NaviationUri,menuItems :dinner3Filtered};});
            
            var dinner2Filtered  = dinner2.filter( (d)=> { return d.menuItems.length > 0 })
            return { text: d1.DisplayText, key: d1.ItemKey, href: d1.NaviationUri,menuItems :dinner2Filtered};});

            var dinner1Filtered  = dinner1.filter( (d)=> { return d.menuItems.length > 0 })
            return {buttonText: d.DisplayText, key: d.ItemKey,menuItems :dinner1Filtered}});
            console.log(JSON.stringify(updatedMenu));
        
        yield put(setNavigationMenu(updatedMenu));        
      
    }
    catch (error) {        
        //MSAL_Wrapper.loginRedirect();
        //throw error;
        console.log("navigationMenuSaga "+error);
        return;
    }
}