import { accessToken } from "../../src/reducers";
import {
    SET_ACCESS_TOKEN
} from '../../src/actions';

describe("when accessToken is invoked",function(){
    it("should change the state and with new accessToken",function(){
        const accessTo = "alsjdflkjasdfiauoshgnasdkfjawerjalskdfjalksdjfklajsdfjlasdfjk";
        expect(accessToken(undefined,{type:SET_ACCESS_TOKEN,accessToken:accessTo})).toBe(accessTo);
    })
})