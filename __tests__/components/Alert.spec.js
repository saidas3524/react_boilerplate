import Alert from "../../src/components/common/Alert";

import React from "react";


jest.dontMock("../../src/components/common/Alert");

describe("Alert component",function(){
    it("should be rendered without props",function(){
        const alertComponent = shallow(
            <Alert/>
        );
        expect(alertComponent).toMatchSnapshot();

    });
    
   
})
describe("when status is failure ",function(){
    it("alert should be rendered with message and class alert-danger",function(){
        var alertValues = {
            status:"FAILED",
            message:"successful"
        }
        const alertComponent = shallow(
            <Alert status={alertValues.status} message = {alertValues.message}/>
        );
        expect(alertComponent).toMatchSnapshot();
        expect(alertComponent.props().className).toContain("alert-danger");
        expect(alertComponent.props().children).toContain(alertValues.message);

    })
})
describe("when status is success ",function(){
    it("alert should be rendered with message and class alert-success",function(){
        var alertValues = {
            status:"SUCCESS",
            message:"successful"
        }
        const alertComponent = shallow(
            <Alert status={alertValues.status} message = {alertValues.message}/>
        );
        expect(alertComponent).toMatchSnapshot();
        expect(alertComponent.props().className).toContain("alert-success");
        expect(alertComponent.props().children).toContain(alertValues.message);

    })
})