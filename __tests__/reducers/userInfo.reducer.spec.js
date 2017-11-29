import { userInfo } from "../../src/reducers";
import {
    SET_USER
} from '../../src/actions';
import { fromJS} from 'immutable';

describe("when userInfo reducer is invoked",function(){
    it("should change the state and with new user info",function(){
        const user = {
            UserId:"something"
        };
        expect(JSON.stringify(userInfo(undefined,{type:SET_USER,userInfo:user}))).toBe(JSON.stringify(fromJS(user)));
    })
})