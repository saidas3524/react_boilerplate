import { createSelector } from 'reselect'
export const saveUserProfileStatusSelector = createSelector(
   state=>state.get("saveProfileStatus"),
   saveProfileStatus=>saveProfileStatus
)