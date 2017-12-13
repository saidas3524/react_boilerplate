import { makeActionCreator } from '../utility';
export const UPDATE_USER = "UPDATE_USER";
export const updateUser = makeActionCreator(UPDATE_USER,true,"userInfo");
