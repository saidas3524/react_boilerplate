import { take,call, put,apply } from "redux-saga/effects";
//import fetch from "isomorphic-fetch";
import {} from "../utility"
import {fromJS} from 'immutable';
import MSAL_Wrapper from "../api/msal_wrapper"

import { GET_RESOURCE_ACCESS_RIGHTS,SET_RESOURCE_ACCESS_RIGHTS, setResourceAccessRights } from '../actions';

import { InvokeUrl } from "./utilitySagas";

export function* resourceAccessRightsSaga() {
    try {
        const { resourcekey } = yield take(GET_RESOURCE_ACCESS_RIGHTS);

        const response = yield call(InvokeUrl,`https://localhost/NavigationAndProfile.WebApi/GetResourceAccessRights?resourceKey=${resourcekey}` , 'GET');
        const accessRights = yield apply(response, response.json);
        yield put(setResourceAccessRights(accessRights));        
      
    }
    catch (error) {        
        //MSAL_Wrapper.loginRedirect();
        //throw error;
        console.log("navigationMenuSaga "+error);
        return;
    }
}