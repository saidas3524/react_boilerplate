import { makeActionCreator } from '../utility';
export const SET_CLAIMS = "SET_CLAIMS";
export const setClaims = makeActionCreator(SET_CLAIMS,true,"claims");