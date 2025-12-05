import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Reward } from '../types/reward';

interface RewardsState {
  collectedRewards: Reward[];
}

const initialState: RewardsState = {
  collectedRewards: [],
};

const rewardsSlice = createSlice({
  name: 'rewards',
  initialState,
  reducers: {
    COLLECT_REWARD: (state, action: PayloadAction<Reward>) => {
      const existingReward = state.collectedRewards.find(
        reward => reward.id === action.payload.id,
      );
      if (!existingReward) {
        state.collectedRewards.push(action.payload);
      }
    },
  },
});

export const { COLLECT_REWARD } = rewardsSlice.actions;
export default rewardsSlice.reducer;
