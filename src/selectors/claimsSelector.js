import { createSelector } from 'reselect'
export const claimsSelector = createSelector(
   state=>state.get("claims"),
   claims=>claims
)