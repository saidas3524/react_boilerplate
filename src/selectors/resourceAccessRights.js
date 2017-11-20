import { createSelector } from 'reselect'
export const resourceAccessRights = createSelector(    
   state=>state.get(`resourceAccessRights`),
   navigationMenu=>resourceAccessRights
)