import { createSelector } from 'reselect'
export const navigationSelector = createSelector(    
   state=>state.get(`navigationMenu`),
   navigationMenu=>navigationMenu
)