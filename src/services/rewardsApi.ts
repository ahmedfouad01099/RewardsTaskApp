import { RewardsResponse } from '../types/reward';
import Config from 'react-native-config';

const REWARDS_ENDPOINT = `${Config.API_BASE_URL}/clients/${Config.CLIENT_ID}/bounties/`;
console.log('5-', REWARDS_ENDPOINT);

export const fetchRewards = async (
  page: number = 1,
  limit: number = 10,
): Promise<RewardsResponse> => {
  try {
    const response = await fetch(
      `${REWARDS_ENDPOINT}?limit=${limit}&page=${page}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: RewardsResponse = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
