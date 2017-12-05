import { createSelector } from 'reselect'
export const saveUserProfileValidationStatusSelector = createSelector(
   state=>state.get("saveProfileValidationStatus"),
   saveProfileValidationStatus=>saveProfileValidationStatus
)