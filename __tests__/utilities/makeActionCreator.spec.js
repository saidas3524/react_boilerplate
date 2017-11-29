import { makeActionCreator } from "../../src/utility";

describe("when makeActionCreator is called",function(){
    it("should return a action and append parameters",function(){

        var actionName = "MY_ACTION";
        var argValues = {
            arg1 : 1,
            arg2 : 2,
            arg3 : 3
        }
        var func = makeActionCreator(actionName,"arg1","arg2","arg3");
        expect(typeof(func)).toBe("function");
        expect(JSON.stringify(func(argValues.arg1,argValues.arg2,argValues.arg3))).toBe(JSON.stringify({type:actionName,arg1:argValues.arg1,arg2:argValues.arg2,arg3:argValues.arg3}));
    })
})