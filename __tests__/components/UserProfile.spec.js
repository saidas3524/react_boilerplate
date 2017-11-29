import UserProfile from "../../src/components/User/UserProfile";
import UserReadOnlyProfile from "../../src/components/User/UserReadOnlyProfile";
import CardsContainer from "../../src/components/common/CardsContainer";
import React from "react";
import { fromJS } from 'immutable';


import { createMockStore } from 'redux-test-utils';
import shallowWithStore from "../shallowWithStore";
import { UPDATE_USER,SAVE_USER_PROFILE } from "../../src/actions";


jest.dontMock("../../src/components/User/UserProfile");
jest.dontMock("../../src/AppInsights/ReactAI");
jest.dontMock("../../src/AppInsights/TrackedComponent");

jest.mock('applicationinsights-js', () => {
    // mock implementation
})

jest.mock('appinsights-usage', () => {
    // mock implementation
})


describe('UserProfile page', () => {
    it("should render successfully if user information is provided by store", () => {
        var state = new Map();
        var currentUser = fromJS({
            user: {
                Countries: [],
                Languages: [],
                TimeZones: [],
                DateFormats: [],

            }
        });
        state.set("currentUser", currentUser);

        const store = createMockStore(state);

        const component = shallowWithStore(<UserProfile />, store);
        expect(component).toMatchSnapshot();
        expect(component).toBeDefined();
    });
    it("should not  render  if user information is not provided by store", () => {
        var state = new Map();

        const store = createMockStore(state);

        const component = shallowWithStore(<UserProfile />, store);
        expect(component).toMatchSnapshot();
        expect(component).toBeDefined();
        expect(component.dive().find(UserReadOnlyProfile)).toHaveLength(0);
        expect(component.dive().find('[name="countries"]')).toHaveLength(0);
        expect(component.dive().find('[name="languages"]')).toHaveLength(0);
        expect(component.dive().find('[name="timezones"]')).toHaveLength(0);
        expect(component.dive().find('[name="dateFormats"]')).toHaveLength(0);
    });
    it("should render successfully the meta info if user information is provided with the meta info by store", () => {
        var state = new Map();
        var currentUser = fromJS({
            user: {
                Countries: [{}, {}],
                Languages: [{}, {}],
                TimeZones: [{}, {}],
                DateFormats: [{}, {}],
                CurrentCountry: {},
                CurrentDateFormat: {},
                CurrentLanguage: {},
                CurrentLoginAccounts: {},
                CurrentTimeZone: {}


            }
        });
        state.set("currentUser", currentUser);

        const store = createMockStore(state);

        const component = shallowWithStore(<UserProfile />, store);
        expect(component).toMatchSnapshot();
        expect(component.dive().find(UserReadOnlyProfile)).toHaveLength(1);
        expect(component.dive().find('[name="countries"]')).toHaveLength(1);
        expect(component.dive().find('[name="languages"]')).toHaveLength(1);
        expect(component.dive().find('[name="timezones"]')).toHaveLength(1);
        expect(component.dive().find('[name="dateFormats"]')).toHaveLength(1);
    });
    it("should dispatch update user action when country is changed ", () => {
        var state = new Map();
        var user = {
            Countries: [{}, {}],
            Languages: [{}, {}],
            TimeZones: [{}, {}],
            DateFormats: [{}, {}],
            CurrentCountry: {},
            CurrentDateFormat: {},
            CurrentLanguage: {},
            CurrentLoginAccounts: {},
            CurrentTimeZone: {}


        };
        var currentUser = fromJS({
            user: user
        });
        state.set("currentUser", currentUser);
        var mockFunction = jest.fn();
        const store = createMockStore(state);

        const component = shallowWithStore(<UserProfile />, store);
        expect(component).toMatchSnapshot();
        component.dive().find('[name="countries"]').first().prop('onChange')({
            target: {
                value: {}
            }
        });
        user.CurrentCountry = undefined;
        expect(store.isActionDispatched({ type: "SAVE_USER_PROFILE_STATUS", status: "DIRTY" })).toBe(true);
        expect(store.isActionDispatched({ type: UPDATE_USER, userInfo: { user: user } })).toBe(true);
    });
    it("should dispatch update user action when language is changed ", () => {
        var state = new Map();
        var user = {
            Countries: [{}, {}],
            Languages: [{}, {}],
            TimeZones: [{}, {}],
            DateFormats: [{}, {}],
            CurrentCountry: {},
            CurrentDateFormat: {},
            CurrentLanguage: {},
            CurrentLoginAccounts: {},
            CurrentTimeZone: {}


        };
        var currentUser = fromJS({
            user: user
        });
        state.set("currentUser", currentUser);
        const store = createMockStore(state);

        const component = shallowWithStore(<UserProfile />, store);
        expect(component).toMatchSnapshot();
        component.dive().find('[name="languages"]').first().prop('onChange')({
            target: {
                value: {}
            }
        });
        user.CurrentLanguage = undefined;
        expect(store.isActionDispatched({ type: "SAVE_USER_PROFILE_STATUS", status: "DIRTY" })).toBe(true);
        expect(store.isActionDispatched({ type: UPDATE_USER, userInfo: { user: user } })).toBe(true);
    });
    it("should dispatch update user action when timezone is changed ", () => {
        var state = new Map();
        var user = {
            Countries: [{}, {}],
            Languages: [{}, {}],
            TimeZones: [{}, {}],
            DateFormats: [{}, {}],
            CurrentCountry: {},
            CurrentDateFormat: {},
            CurrentLanguage: {},
            CurrentLoginAccounts: {},
            CurrentTimeZone: {}


        };
        var currentUser = fromJS({
            user: user
        });
        state.set("currentUser", currentUser);
        const store = createMockStore(state);

        const component = shallowWithStore(<UserProfile />, store);
        expect(component).toMatchSnapshot();
        component.dive().find('[name="timezones"]').first().prop('onChange')({
            target: {
                value: {}
            }
        });
        user.CurrentTimeZone = undefined;
        expect(store.isActionDispatched({ type: "SAVE_USER_PROFILE_STATUS", status: "DIRTY" })).toBe(true);
        expect(store.isActionDispatched({ type: UPDATE_USER, userInfo: { user: user } })).toBe(true);
    });
    it("should dispatch update user action when dateformat is changed ", () => {
        var state = new Map();
        var user = {
            Countries: [{}, {}],
            Languages: [{}, {}],
            TimeZones: [{}, {}],
            DateFormats: [{}, {}],
            CurrentCountry: {},
            CurrentDateFormat: {},
            CurrentLanguage: {},
            CurrentLoginAccounts: {},
            CurrentTimeZone: {}


        };
        var currentUser = fromJS({
            user: user
        });
        state.set("currentUser", currentUser);
        const store = createMockStore(state);

        const component = shallowWithStore(<UserProfile />, store);
        expect(component).toMatchSnapshot();
        component.dive().find('[name="dateFormats"]').first().prop('onChange')({
            target: {
                value: {}
            }
        });
        user.CurrentDateFormat = undefined;
        expect(store.isActionDispatched({ type: "SAVE_USER_PROFILE_STATUS", status: "DIRTY" })).toBe(true);
        expect(store.isActionDispatched({ type: UPDATE_USER, userInfo: { user: user } })).toBe(true);
    });
    it("should dispatch update user action when a new login is added is changed ", () => {
        var state = new Map();
        var user = {
            Countries: [{}, {}],
            Languages: [{}, {}],
            TimeZones: [{}, {}],
            DateFormats: [{}, {}],
            CurrentCountry: {},
            CurrentDateFormat: {},
            CurrentLanguage: {},
            CurrentLoginAccounts: [],
            CurrentTimeZone: {},
            Realms: [
                {
                    LoginCredentialTypes: [
                    {
                        LoginCredentialTypeName: "Live"
                    }]
                }]


        };
        var currentUser = fromJS({
            user: user
        });
        state.set("currentUser", currentUser);
        const store = createMockStore(state);

        const component = shallowWithStore(<UserProfile />, store);
        expect(component).toMatchSnapshot();
        var email = "saidaso@microsoft.com";
        var data =  {
            Realm : user.Realms[0],
            LoginCredentialType:user.Realms[0].LoginCredentialTypes[0],
            LoginCredentialName: email,
            AADLoginCredentialName: email,
        }
        component.dive().find(CardsContainer).first().prop('AddLoginCredential')(email);
        user.CurrentLoginAccounts.push(data);
        expect(store.isActionDispatched({ type: "SAVE_USER_PROFILE_STATUS", status: "DIRTY" })).toBe(true);
        expect(store.isActionDispatched({ type: UPDATE_USER, userInfo: { user: user } })).toBe(true);
    });
    it("should dispatch update user action when a new login is added is changed ", () => {
        var state = new Map();
        var user = {
            Countries: [{}, {}],
            Languages: [{}, {}],
            TimeZones: [{}, {}],
            DateFormats: [{}, {}],
            CurrentCountry: {},
            CurrentDateFormat: {},
            CurrentLanguage: {},
            CurrentLoginAccounts: [],
            CurrentTimeZone: {},
            Realms: [
                {
                    LoginCredentialTypes: [
                    {
                        LoginCredentialTypeName: ""
                    }]
                }]


        };
        var currentUser = fromJS({
            user: user
        });
        state.set("currentUser", currentUser);
        const store = createMockStore(state);

        const component = shallowWithStore(<UserProfile />, store);
        expect(component).toMatchSnapshot();
        var email = "saidaso@microsoft.com";
        var data =  {
            Realm : null,
            LoginCredentialType:null,
            LoginCredentialName: email,
            AADLoginCredentialName: email,
        }
        component.dive().find(CardsContainer).first().prop('AddLoginCredential')(email);
        user.CurrentLoginAccounts.push(data);
        expect(store.isActionDispatched({ type: "SAVE_USER_PROFILE_STATUS", status: "DIRTY" })).toBe(true);
        expect(store.isActionDispatched({ type: UPDATE_USER, userInfo: { user: user } })).toBe(true);
    });
    it("should dispatch update user action when a login is removed ", () => {
        var state = new Map();
        var realms = [
            {
                LoginCredentialTypes: [
                {
                    LoginCredentialTypeName: "Live"
                }]
            }];
        var email = "saidaso@microsoft.com";
        var data =  {
            Realm : realms[0],
            LoginCredentialId:1,
            LoginCredentialType:realms[0].LoginCredentialTypes[0],
            LoginCredentialName: email,
            AADLoginCredentialName: email,
        }
        var user = {
            Countries: [{}, {}],
            Languages: [{}, {}],
            TimeZones: [{}, {}],
            DateFormats: [{}, {}],
            CurrentCountry: {},
            CurrentDateFormat: {},
            CurrentLanguage: {},
            CurrentLoginAccounts: [data],
            CurrentTimeZone: {},
            Realms: realms


        };
        var currentUser = fromJS({
            user: user
        });
        state.set("currentUser", currentUser);
        const store = createMockStore(state);

        const component = shallowWithStore(<UserProfile />, store);
        expect(component).toMatchSnapshot();
        
        component.dive().find(CardsContainer).first().prop('LoginCredentialRemoved')({LoginCredentialId:1});
        user.CurrentLoginAccounts = [];
        expect(store.isActionDispatched({ type: "SAVE_USER_PROFILE_STATUS", status: "DIRTY" })).toBe(true);
        expect(store.isActionDispatched({ type: UPDATE_USER, userInfo: { user: user } })).toBe(true);
    });
    it("should dispatch update user action when a login which doesnt not exist is removed ", () => {
        var state = new Map();
        var realms = [
            {
                LoginCredentialTypes: [
                {
                    LoginCredentialTypeName: "Live"
                }]
            }];
        var email = "saidaso@microsoft.com";
        var data =  {
            Realm : realms[0],
            LoginCredentialId:10,
            LoginCredentialType:realms[0].LoginCredentialTypes[0],
            LoginCredentialName: email,
            AADLoginCredentialName: email,
        }
        var user = {
            Countries: [{}, {}],
            Languages: [{}, {}],
            TimeZones: [{}, {}],
            DateFormats: [{}, {}],
            CurrentCountry: {},
            CurrentDateFormat: {},
            CurrentLanguage: {},
            CurrentLoginAccounts: [data],
            CurrentTimeZone: {},
            Realms: realms


        };
        var currentUser = fromJS({
            user: user
        });
        state.set("currentUser", currentUser);
        const store = createMockStore(state);

        const component = shallowWithStore(<UserProfile />, store);
        expect(component).toMatchSnapshot();
        
        component.dive().find(CardsContainer).first().prop('LoginCredentialRemoved')({LoginCredentialId:1});
        expect(store.isActionDispatched({ type: "SAVE_USER_PROFILE_STATUS", status: "DIRTY" })).toBe(true);
        expect(store.isActionDispatched({ type: UPDATE_USER, userInfo: { user: user } })).toBe(false);
    });
    it("should dispatch save user action when a Save button is clicked ", () => {
        var state = new Map();
        var user = {
            Countries: [{}, {}],
            Languages: [{}, {}],
            TimeZones: [{}, {}],
            DateFormats: [{}, {}],
            CurrentCountry: {},
            CurrentDateFormat: {},
            CurrentLanguage: {},
            CurrentLoginAccounts: [],
            CurrentTimeZone: {},
            Realms: [
                {
                    LoginCredentialTypes: [
                    {
                        LoginCredentialTypeName: "Live"
                    }]
                }]


        };
        var currentUser = fromJS({
            user: user
        });
        state.set("currentUser", currentUser);
        const store = createMockStore(state);

        const component = shallowWithStore(<UserProfile />, store);
        expect(component).toMatchSnapshot();
        var email = "saidaso@microsoft.com";
        var data =  {
            Realm : user.Realms[0],
            LoginCredentialType:user.Realms[0].LoginCredentialTypes[0],
            LoginCredentialName: email,
            AADLoginCredentialName: email,
        }
        component.dive().find('[name="saveProfile"]').first().simulate('click',{preventDefault: function(){
            return true;
        }});
        expect(store.isActionDispatched({ type: SAVE_USER_PROFILE, userInfo: { user: user } })).toBe(true);
    });
});