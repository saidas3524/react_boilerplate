import { createReducer } from './../utility';
import { fromJS} from 'immutable'
import {
    SET_NEWS_FEED
} from '../actions'
export const newsFeed = createReducer(null, {
    [SET_NEWS_FEED](state,{newsFeed}) {
        return fromJS(newsFeed);
    }
});