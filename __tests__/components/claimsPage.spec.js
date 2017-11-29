import ClaimsPage from "../../src/components/User/ClaimsPage";

import React from "react";
import { fromJS } from 'immutable';


import { createMockStore } from 'redux-test-utils';
import shallowWithStore from "../shallowWithStore";



describe('claims page', () => {
    it("should render successfully if claims are  provided by store", () => {
        var state = new Map();
        var claims = fromJS([{},{}]);
        state.set("claims", claims);

        const store = createMockStore(state);

        const component = shallowWithStore(<ClaimsPage />, store);
        expect(component).toMatchSnapshot();
        expect(component).toBeDefined();
    });
    it("should not  render rows if the claims are null", () => {
        var state = new Map();
        const store = createMockStore(state);
        const component = shallowWithStore(<ClaimsPage />, store);
        expect(component).toMatchSnapshot();
        expect(component).toBeDefined();
        expect(component.dive().find('table').length).toBe(0);
        expect(component.dive().find('tbody>tr').length).toBe(0);
        expect(component.dive().find('tbody>tr>td').filterWhere(n =>  n.props().children == "Custom Claim").length).toBe(0);
        expect(component.dive().find('tbody>tr>td').filterWhere(n =>  n.props().children == "Default Claim").length).toBe(0);
    });
    it("should render table with claims as rows", () => {
        var state = new Map();
        var claims = fromJS([
        {
            Type: "http://ms.it.oem/2011/10/claims/AuthenticationType",
            Value: "Live"
        },
        {
            Type: "http://ms.it.oem/2011/10/claims/CompanyCount",
            Value: "0"
        },
        {

            Type: "preferred_username",
            Value: "oemdevsnew@live.com"
        }]);
        state.set("claims", claims);
        const store = createMockStore(state);
        const component = shallowWithStore(<ClaimsPage />, store);
        expect(component).toMatchSnapshot();
        expect(component.dive().find('table').length).toBe(1);
        expect(component.dive().find('tbody>tr').length).toBe(3);
        expect(component.dive().find('tbody>tr>td').filterWhere(n =>  n.props().children == "Custom Claim").length).toBe(2);
        expect(component.dive().find('tbody>tr>td').filterWhere(n =>  n.props().children == "Default Claim").length).toBe(1);
    });
});