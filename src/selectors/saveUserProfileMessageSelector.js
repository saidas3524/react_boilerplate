import { createSelector } from 'reselect'
export const saveUserProfileMessageSelector = createSelector(
   state=>state.get("saveProfileMessage"),
   saveProfileMessage=>saveProfileMessage
)