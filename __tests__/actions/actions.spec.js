
import {GET_CLAIMS,getClaims} from "../../src/actions";
describe("when getClaims is called",function(){
    it("should return claims object",function(){
        const claims = {};
        expect(getClaims(claims).type).toBe(GET_CLAIMS);
        expect(getClaims(claims).claims).toBe(claims);
    })
})