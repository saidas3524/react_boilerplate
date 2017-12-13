import { saveProfileStatus } from "../../src/reducers";
import {
    SAVE_USER_PROFILE_STATUS
} from '../../src/actions';

describe("when saveProfileStatus reducer is invoked",function(){
    it("should change the state and with status",function(){
        const status = "SAVING"
        expect(saveProfileStatus(undefined,{type:SAVE_USER_PROFILE_STATUS,status:status})).toBe(status);
    })
})