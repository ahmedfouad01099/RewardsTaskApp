import React, { useCallback } from 'react';
import { FlatList, RefreshControl, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Reward } from '../types/reward';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { COLLECT_REWARD } from '../store/rewardsSlice';
import RewardItem from '../components/RewardItem';
import { useRewards } from '../hooks/useRewards';
import { LoadingState } from '../components/LoadingState';
import { EmptyState } from '../components/EmptyState';
import { ListFooter } from '../components/ListFooter';
import { ScreenHeader } from '../components/ScreenHeader';

const AvailableRewardsScreen: React.FC = () => {
  const { rewards, loading, refreshing, error, handleLoadMore, handleRefresh } =
    useRewards();

  const dispatch = useAppDispatch();
  const collectedRewards = useAppSelector(
    state => state.rewards.collectedRewards,
  );

  const handleCollect = useCallback(
    (reward: Reward) => {
      dispatch(COLLECT_REWARD(reward));
    },
    [dispatch],
  );

  const isRewardCollected = useCallback(
    (rewardId: number) => collectedRewards.some(r => r.id === rewardId),
    [collectedRewards],
  );

  const renderItem = useCallback(
    ({ item }: { item: Reward }) => (
      <RewardItem
        reward={item}
        isCollected={isRewardCollected(item.id)}
        onCollect={handleCollect}
      />
    ),
    [isRewardCollected, handleCollect],
  );

  const keyExtractor = useCallback(
    (item: Reward, index: number) => `${item.id}-${index}`,
    [],
  );

  const emptyMessage = error || 'No rewards available';
  const shouldShowEmpty = !loading || rewards.length > 0;

  if (loading && rewards.length === 0) {
    return <LoadingState />;
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <ScreenHeader title="Available Rewards" />
      <FlatList
        data={rewards}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={<ListFooter loading={loading} />}
        ListEmptyComponent={
          shouldShowEmpty ? <EmptyState message={emptyMessage} /> : null
        }
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={['#4CAF50']}
            tintColor="#4CAF50"
          />
        }
        contentContainerStyle={styles.listContent}
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={50}
        initialNumToRender={10}
        windowSize={10}
      />
    </SafeAreaView>
  );
};

export default AvailableRewardsScreen;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listContent: {
    paddingVertical: 8,
  },
});
