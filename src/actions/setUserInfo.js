import { makeActionCreator } from '../utility';
export const SET_USER = "SET_USER";
export const setUser = makeActionCreator(SET_USER,true,"userInfo");