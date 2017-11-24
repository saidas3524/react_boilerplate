import { createSelector } from 'reselect'
export const userInfoSelector = createSelector(    
   state=>state.get(`userInfo`),
   userInfo=>userInfo
)