import { take, put, call, apply } from 'redux-saga/effects';
import { fromJS } from 'immutable';
import MSAL_Wrapper from "../api/msal_wrapper";
import { InvokeUrl,InvokeResponseUrl } from "./utilitySagas";
//import fetch from 'isomorphic-fetch';

import { SAVE_USER_PROFILE, setSaveUserProfileStatus,setSaveUserProfileMessage,SAVING,FAILED,SAVED } from './../actions';


export function* saveUserProfileSaga() {
    while (true) {

        try
        {
            const { userInfo } = yield take(SAVE_USER_PROFILE);
            console.info("this is form your saga  ******** ",userInfo);
        
            var user = userInfo.user;

            yield put(setSaveUserProfileStatus(SAVING));


            console.info("this is form your saga  ******** ",user);


            var userProfile = JSON.stringify({
               FirstName: user.FirstName,
              LastName: user.LastName,
              ContactEmail: user.ContactEmail,
              TimeZone: user.CurrentTimeZone,
              Country: user.CurrentCountry,
              Language: user.CurrentLanguage,
              DateFormat: user.CurrentDateFormat,
              LoginCredentials: user.CurrentLoginAccounts,
              UserProfileId:user.UserProfileId
            });

            console.log("this is generated user profile",userProfile);

      
            const responseC = yield call(InvokeUrl, 'https://localhost/NavigationAndProfile.WebApi/SaveMyUserProfile', 'POST',
            userProfile);

            console.info("This is response code ",responseC.status);

            console.info("recieved response form service",responseC);

            const responsemsg = yield responseC.json();

            console.info("this is json response",responsemsg);

            if(responseC.status == 200)
            {
                yield put(setSaveUserProfileMessage("Saved Successfully"));
                yield put(setSaveUserProfileStatus(SAVED));
            }
            else
            {
                yield put(setSaveUserProfileMessage(responsemsg));
                yield put(setSaveUserProfileStatus(FAILED));
            }
        }
       // 
        //        call web api for this
        catch(error)
        {
            console.info("This is catch",error);
            yield put(setSaveUserProfileMessage("Saving Failed"));
            yield put(setSaveUserProfileStatus(FAILED));
        }
     
    }
}

// let removeLoginFunction = function *(){

// }