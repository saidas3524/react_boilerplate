import { makeActionCreator } from '../utility';
export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";
export const setAccessToken = makeActionCreator(SET_ACCESS_TOKEN,"accessToken");