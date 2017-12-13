import { makeActionCreator } from '../utility';
export const SET_NAVIGATION_MENU = "SET_NAVIGATION_MENU";
export const setNavigationMenu = makeActionCreator(SET_NAVIGATION_MENU,true,"navigationMenu");