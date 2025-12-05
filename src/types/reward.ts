export interface Reward {
  id: number;
  name: string;
  needed_points: number;
  image?: string;
  description?: string;
}

export interface RewardsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Reward[];
}
