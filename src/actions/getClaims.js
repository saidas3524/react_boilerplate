import { makeActionCreator } from '../utility';
export const GET_CLAIMS = "GET_CLAIMS";
export const getClaims = makeActionCreator(GET_CLAIMS,true,"claims");