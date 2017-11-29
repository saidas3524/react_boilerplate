            
import { navigationMenu } from "../../src/reducers";
import {
    SET_NAVIGATION_MENU
} from '../../src/actions';
import { fromJS} from 'immutable';
describe("when navigationMenu reducer is invoked",function(){
    it("should change the state and with navigation",function(){
        const navigationMenuList = [{
            id:1,
            Route:"message"
        },{
            id:2,
            Route:"message"
        }]
        expect(JSON.stringify(navigationMenu(undefined,{type:SET_NAVIGATION_MENU,navigationMenu:navigationMenuList}))).toBe(JSON.stringify(fromJS(navigationMenuList)));
    })
})