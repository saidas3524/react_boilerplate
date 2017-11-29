import CardsContainer from "../../src/components/common/CardsContainer";

import React from "react";


jest.dontMock("../../src/components/common/CardsContainer");

describe("CardsContainer component",function(){
    it("should be rendered without props",function(){
        const cardsContainerComponent = shallow(
            <CardsContainer/>
        );
        expect(cardsContainerComponent).toMatchSnapshot();

    });
    
    it("cardList should be rendered",function(){
        const cardsContainerComponent = shallow(
            <CardsContainer/>
        );
        expect(cardsContainerComponent).toMatchSnapshot();
       
        expect(cardsContainerComponent.find("CardList").length).toBe(1);

    })
    it("should call AddLoginCredential of parent when Add button is clicked ",function(){
        var mockFunction = jest.fn();
        const cardsContainerComponent = shallow(
            <CardsContainer AddLoginCredential = {mockFunction}/>
        );
        expect(cardsContainerComponent).toMatchSnapshot();
       
        cardsContainerComponent.find('[name="addEmailButton"]').first().simulate('click');
        expect(mockFunction).toHaveBeenCalled();

    })
    it("cardList should be rendered with event",function(){
        var mockFunction = jest.fn();
        const cardsContainerComponent = mount(
            <CardsContainer LoginCredentialRemoved={mockFunction}/>
        );
        expect(cardsContainerComponent).toMatchSnapshot();
       
        cardsContainerComponent.find("CardList").first().prop('onClick')(mockFunction);
        expect(mockFunction).toHaveBeenCalled();
        

    })
    it("should change the state when input is changed",function(){
       
        const cardsContainerComponent = mount(
            <CardsContainer />
        );
        expect(cardsContainerComponent).toMatchSnapshot();
       
        cardsContainerComponent.find('[name="emailToAdd"]').first().simulate('change', {target: {value: 'My new value'}});
        expect(cardsContainerComponent.state().emailToAdd).toBe("My new value");
        

    })
 })

