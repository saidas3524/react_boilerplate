import { newsFeed } from "../../src/reducers";
import {
    SET_NEWS_FEED
} from '../../src/actions';
import { fromJS} from 'immutable'

describe("when newsFeed reducer is invoked",function(){
    it("should change the state and with new news feed",function(){
        const feed = [{
            id:1,
            Message:"message"
        },{
            id:2,
            Message:"message"
        }]
        expect(JSON.stringify(newsFeed(undefined,{type:SET_NEWS_FEED,newsFeed:feed}))).toBe(JSON.stringify(fromJS(feed)));
    })
})