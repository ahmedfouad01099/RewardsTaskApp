import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  collectedRewards: [],
};

const rewardsSlice = createSlice({
  name: 'rewards',
  initialState,
  reducers: {
    COLLECT_REWARD: () => {},
  },
});

export const { COLLECT_REWARD } = rewardsSlice.actions;
export default rewardsSlice.reducer;
