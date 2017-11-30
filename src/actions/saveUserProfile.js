import { makeActionCreator } from '../utility';
export const SAVE_USER_PROFILE = "SAVE_USER_PROFILE";
export const SAVE_USER_PROFILE_STATUS = "SAVE_USER_PROFILE_STATUS";
export const SAVING = "SAVING";
export const SAVED = "SAVED";
export const FAILED = "FAILED";
export const DIRTY = "DIRTY";
export const saveUserProfile = makeActionCreator(SAVE_USER_PROFILE,true,"userInfo");
export const setSaveUserProfileStatus = makeActionCreator(SAVE_USER_PROFILE_STATUS,true,"status");
