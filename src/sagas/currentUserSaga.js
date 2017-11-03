import { take, put, call, apply  } from 'redux-saga/effects';
import {fromJS} from 'immutable';
import MSAL_Wrapper from "../api/msal_wrapper"
//import fetch from 'isomorphic-fetch';

import {
    GET_CURRENT_USER_INFO,
    setCurrentUser
} from './../actions'

export function* currentUserSaga() {
    console.log("current user saga Invoked")
    const { id } = yield take(GET_CURRENT_USER_INFO);
  
    // debugger;
   
    // const accestoken = yield call(MSAL_Wrapper.clientApplication.acquireTokenSilent,  ['d1d9a68c-35e0-4ff5-ac06-3ef3dc438bc6']);
    const accesstoken = yield call(MSAL_Wrapper.getAccessToken);
    
     console.log("accesstoken :"+ accesstoken);
     const response = yield call(fetch,'https://api.microsoftoem.net/Companyaad/royd/v1/GetNavigation', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accesstoken}`,
        }
      });
    const claimsData = yield apply(response, response.json);
    console.log("claimsData :"+ claimsData);

    var data = fromJS({ user: {
        name: "Sai Krishna Dasoju",
        newsFeed: [
            {
                Id: "1",
                title: "Microsoft Hikes",
                message: "test message test message test messagetest message test messagetest message test messagetest message test message test message test message test messagetest message test messagetest message test messagetest message test messagetest message test message test messagetest message test messagetest message test messagetest message test messagetest message test message test messagetest message test messagetest message test messagetest message test messagetest message test message test messagetest message test messagetest message test messagetest message test message",

            },
            {
                Id: "2",
                title: "Microsoft Hike3s",
                message: "test test message test message test messagetest message test messagetest message test messagetest message test messagetest message test message test messagetest message test messagetest message test messagetest message test messagetest message test message test messagetest message test messagetest message test messagetest message test messagemessage test message test messagetest message test messagetest message test messagetest message test message",

            },
            {
                Id: "3",
                title: "Microsoft Hike4s",
                message: "test message testtest message test message test messagetest message test messagetest message test messagetest message test messagetest message test message test messagetest message test messagetest message test messagetest message test messagetest message test message test messagetest message test messagetest message test messagetest message test message message test messagetest message test messagetest message test messagetest message test message",

            }

        ]
    }
    });
    yield put(setCurrentUser(data));
}