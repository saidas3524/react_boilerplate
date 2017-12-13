import Card from "../../src/components/common/Card";

import React from "react";


jest.dontMock("../../src/components/common/Card");

describe("Card component",function(){
    it("should be rendered without props",function(){
        const cardComponent = shallow(
            <Card/>
        );
        expect(cardComponent).toMatchSnapshot();

    });
    
    it("card should not be rendered if card prop is null",function(){
        const cardComponent = shallow(
            <Card/>
        );
        expect(cardComponent).toMatchSnapshot();
       
        expect(cardComponent.props().children).toBeUndefined();

    })
    it("card should  be rendered if card prop is not null",function(){
        const cardComponent = shallow(
            <Card card={{}}/>
        );
        expect(cardComponent).toMatchSnapshot();
       
        expect(cardComponent.props().children).toBeDefined();

    })
   
 })

// describe("when status is success ",function(){
//     it("alert should be rendered with message and class alert-success",function(){
//         var alertValues = {
//             status:"SUCCESS",
//             message:"successful"
//         }
//         const alertComponent = shallow(
//             <Alert status={alertValues.status} message = {alertValues.message}/>
//         );
//         expect(alertComponent).toMatchSnapshot();
//         expect(alertComponent.props().className).toContain("alert-success");
//         expect(alertComponent.props().children).toContain(alertValues.message);

//     })
// })