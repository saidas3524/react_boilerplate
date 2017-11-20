import { createSelector } from 'reselect'
export const newsFeedSelector = createSelector(    
   state=>state.get(`newsFeed`),
   newsFeed=>newsFeed
)