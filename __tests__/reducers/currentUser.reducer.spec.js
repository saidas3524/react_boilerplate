import { currentUser } from "../../src/reducers";
import {
    SET_CURRENT_USER
} from '../../src/actions';
import { fromJS} from 'immutable';

describe("when currentUser reducer is invoked",function(){
    it("should change the state and with new user info",function(){
        const user = {
            UserId:"something"
        };
        expect(JSON.stringify(currentUser(undefined,{type:SET_CURRENT_USER,user:user}))).toBe(JSON.stringify(fromJS(user)));
    })
})