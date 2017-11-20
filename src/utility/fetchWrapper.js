import fetch from "isomorphic-fetch";
import MSAL_Wrapper from "../api/msal_wrapper"

const InvokeUrl= (url, data, method)=>{
    const accessToken= MSAL_Wrapper.getAccessToken();
    const responseC = fetch(url,{ 
        method:method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        }});
        return responseC;
}

export default InvokeUrl;

