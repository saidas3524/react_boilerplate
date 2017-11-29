import { createReducer } from "../../src/utility";


describe("when createReducer is invoked",function(){
    it("should create a reducer function and return",function(){
        //mocking reducer resolving function
        const myMockFunction = jest.fn();
        myMockFunction.mockReturnValue("mymockedvalue");
        
        //creating a test action to pass to reducer created by create reducer
        var actionName = "SOME_ACTION";
        //testing createReducer with action
        var reducer = createReducer(null,{"SOME_ACTION":myMockFunction});
        var action = {type:actionName,actionValue:"value"};
        
        //testing the reducer created by create reducer
        var value = reducer(undefined,action);

        //asserts
        expect(myMockFunction).toHaveBeenCalledWith(null,action);
        expect(value).toBe("mymockedvalue");
    })
})