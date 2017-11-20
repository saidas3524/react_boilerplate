import { makeActionCreator } from "../utility";
export const SET_NEWS_FEED = "SET_NEWS_FEED";
export const setNewsFeed = makeActionCreator(SET_NEWS_FEED,"newsFeed");
