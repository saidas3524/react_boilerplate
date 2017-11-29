import CardList from "../../src/components/common/CardList";

import React from "react";


jest.dontMock("../../src/components/common/CardList");

describe("CardList component",function(){
    it("should be rendered without props",function(){
        const cardListComponent = shallow(
            <CardList/>
        );
        expect(cardListComponent).toMatchSnapshot();

    });
    
    it("cardList should not be rendered if values prop is null",function(){
        const cardListComponent = shallow(
            <CardList/>
        );
        expect(cardListComponent).toMatchSnapshot();
       
        expect(cardListComponent.props().children).toBeUndefined();

    })
    it("cardList should  be rendered if card prop is not null",function(){
        const cardListComponent = shallow(
            <CardList values={[]}/>
        );
        expect(cardListComponent).toMatchSnapshot();
       
        expect(cardListComponent.props().children).toBeDefined();

    })
    it("list items should be rendered equal to number of cards",function(){
        var cards = [{},{}];
        const cardListComponent = mount(
            <CardList values={cards}/>
        );
        expect(cardListComponent).toMatchSnapshot();
       
        expect(cardListComponent.find("li").length).toBe(cards.length);

    })
    describe("when list item remove icon is clicked",function(){
        it("Click event should be calling the prop click function",function(){
            var cards = [{},{}];
            var mockFunction = jest.fn();
            const cardListComponent = mount(
                <CardList values={cards} onClick = {mockFunction}/>
            );
            expect(cardListComponent).toMatchSnapshot();
           
            cardListComponent.find(".badge").first().simulate('click');
            expect(mockFunction).toHaveBeenCalled();
    
        })
    })
    

   
 })

