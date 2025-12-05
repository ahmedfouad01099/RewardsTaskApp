import { useState, useCallback, useEffect } from 'react';
import { Reward } from '../types/reward';
import { fetchRewards } from '../services/rewardsApi';

export const useRewards = () => {
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadRewards = useCallback(
    async (pageNum: number, isRefresh: boolean = false) => {
      setLoading(true);

      try {
        if (isRefresh) {
          setRefreshing(true);
        }
        setError(null);

        const data = await fetchRewards(pageNum, 10);

        // Filter out rewards without image
        const rewardsWithImages = data.results.filter(reward => reward.image);

        if (isRefresh) {
          setRewards(rewardsWithImages);
        } else {
          setRewards(prev => [...prev, ...rewardsWithImages]);
        }

        setHasMore(data.next !== null);
      } catch (err) {
        setError('Failed to load rewards. Please try again.');
        console.error('Error loading rewards:', err);
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [],
  );

  useEffect(() => {
    loadRewards(1);
  }, [loadRewards]);

  const handleLoadMore = useCallback(() => {
    if (!loading && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      loadRewards(nextPage);
    }
  }, [loading, hasMore, page, loadRewards]);

  const handleRefresh = useCallback(() => {
    setPage(1);
    setHasMore(true);
    loadRewards(1, true);
  }, [loadRewards]);

  return {
    rewards,
    loading,
    refreshing,
    error,
    hasMore,
    handleLoadMore,
    handleRefresh,
  };
};
