import { claims } from "../../src/reducers";
import {
    SET_CLAIMS
} from '../../src/actions';
import { fromJS} from 'immutable';

describe("when claims reducer is invoked",function(){
    it("should change the state and with new claims",function(){
        const claimsData = {
            UserId:"something"
        };
        expect(JSON.stringify(claims(undefined,{type:SET_CLAIMS,claims:claimsData}))).toBe(JSON.stringify(fromJS(claimsData)));
    })
})