import {
     accessTokenSelector,
     claimsSelector,
     userInfoSelector,
     currentUserSelector,
     navigationSelector,
     newsFeedSelector,
     saveUserProfileStatusSelector 
 } from "../../src/selectors";

 jest.autoMockOn();
//jest.dontMock('reselect');

describe(" when accessTokenSelector is called with state",function(){
    it("should return accessToken property of that state",function(){
        var state = new Map();
        var accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFMVE16YWtpaGlSbGFfOHoyQkVKVlhlV01xbyJ9.eyJ2ZXIiOiIyLjAiLCJpc3MiOiJodHRwczovL2xvZ2luLm1pY3Jvc29mdG9ubGluZS5jb20vOTE4ODA0MGQtNmM2Ny00YzViLWIxMTItMzZhMzA0YjY2ZGFkL3YyLjAiLCJzdWIiOiJBQUFBQUFBQUFBQUFBQUFBQUFBQUFGeDVEOU9JUzFQUVdEQ1ltUVduWU00IiwiYXVkIjoiZDFkOWE2OGMtMzVlMC00ZmY1LWFjMDYtM2VmM2RjNDM4YmM2IiwiZXhwIjoxNTExODUwMTI4LCJpYXQiOjE1MTE3NjM0MjgsIm5iZiI6MTUxMTc2MzQyOCwibmFtZSI6Im9lbWRldnMgb2VtZGV2cyIsInByZWZlcnJlZF91c2VybmFtZSI6Im9lbWRldnNuZXdAbGl2ZS5jb20iLCJvaWQiOiIwMDAwMDAwMC0wMDAwLTAwMDAtNTFhYy1iYzAzM2UwNzQ2NDYiLCJlbWFpbCI6Im9lbWRldnNuZXdAbGl2ZS5jb20iLCJ0aWQiOiI5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJub25jZSI6IjE2MGY1ZjZkLWMzMjktNDFkYS1iZDQ3LThjNjQ0NzI2ZTYwYiIsImFpbyI6IkRlQ1ZLMDZuaDBOOXBJSXplY01sb3pHaFM1N09QdFhNVDchY2FaIWlzWURCVmdnbWZwWXVLc3hJKktnITBrNnpCS0w5RWdTYm9RQUpqcnRsb0dlTkQ4N2ZzNGJVYmh2c1JUbipObjJoZ0NiVCJ9.jLipDS5a0xNbyVp69zv8VoZuthUctnBeahhqHOJ0KRe14LmtrX7H0dHE-wFFB0tQPp0OrTJqXYx7rvI-lkO1mSZ5yB_WBcbvXp_cIH92PvJb3o9ouq-PelX8BhX6i6IrekUur5CfAP4LcOr1oIb-En1Yff3w0jJ1vXKMqw0Q-XYUrqmlgsQQGCoA337gi4iVokjZI2eMZI7PmLy1Ls7grLKQQghcb2h3PkiC6JMIMMOb89PqSJNIP3lAYwS65f1Z1mi3TusbEpH09UBsgIHC4nbhar5v33AmMiq4M6CEiG3hAxx43zrwcevToa9LvCKwu4Jrcjh8Y7w5pjd9B9xppg"
        state.set("accessToken",accessToken);
        var result = accessTokenSelector(state);
        expect(result).toBe(accessToken);
    })
})
describe(" when claimsSelector is called with state",function(){
    it("should return claims property of that state",function(){
        var state = new Map();
        var claims = {
            "user":"testUser"
        }
        state.set("claims",claims);
        var result = claimsSelector(state);
        expect(result).toBe(claims);
    })
})
describe(" when userInfoSelector is called with state",function(){
    it("should return userInfo property of that state",function(){
        var state = new Map();
        var userInfo = {
            "user":"testUser"
        };
        state.set("userInfo",userInfo);
        var result = userInfoSelector(state);
        expect(result).toBe(userInfo);
    })
})
describe(" when currentUserSelector is called with state",function(){
    it("should return currentUserInfo property of that state",function(){
        var state = new Map();
        var currentUser = {
            "user":"testUser"
        };;
        state.set("currentUser",currentUser);
        var result = currentUserSelector(state);
        expect(result).toBe(currentUser);
    })
})
describe(" when navigationSelector is called with state",function(){
    it("should return navigation property of that state",function(){
        var state = new Map();
        var navigation = {
            "pricing":{},
            "return":{}
        }
        state.set("navigationMenu",navigation);
        var result = navigationSelector(state);
        expect(result).toBe(navigation);
    })
})
describe(" when saveUserProfileStatusSelector is called with state",function(){
    it("should return saveUserProfileStatus property of that state",function(){
        var state = new Map();
        var status = "SAVING";
        state.set("saveProfileStatus",status);
        var result = saveUserProfileStatusSelector(state);
        expect(result).toBe(status);
    })
})
describe(" when newsFeedSelector is called with state",function(){
    it("should return newsFeed property of that state",function(){
        var state = new Map();
        var newsFeed = [{},{},{}];
        state.set("newsFeed",newsFeed);
        var result = newsFeedSelector(state);
        expect(result).toBe(newsFeed);
    })
})

