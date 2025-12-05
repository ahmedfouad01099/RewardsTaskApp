import { configureStore } from '@reduxjs/toolkit';
import rewardsReducer from './rewardsSlice';

let reactotron: any;
if (__DEV__) {
  reactotron = require('../../ReactotronConfig').default;
}

export const store = configureStore({
  reducer: {
    rewards: rewardsReducer,
  },
  enhancers: getDefaultEnhancers => {
    if (__DEV__ && reactotron) {
      return getDefaultEnhancers().concat(reactotron.createEnhancer());
    }
    return getDefaultEnhancers();
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
