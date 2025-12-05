import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppSelector } from '../store/hooks';
import { Reward } from '../types/reward';
import RewardItem from '../components/RewardItem';

const CollectedRewardsScreen: React.FC = () => {
  const collectedRewards = useAppSelector(
    state => state.rewards.collectedRewards,
  );

  const renderItem = ({ item }: { item: Reward }) => (
    <RewardItem reward={item} isCollected={true} onCollect={() => {}} />
  );

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No collected rewards yet</Text>
      <Text style={styles.emptySubtext}>
        Browse available rewards and start collecting!
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Collected Rewards</Text>
        <Text style={styles.headerCount}>
          {collectedRewards.length}{' '}
          {collectedRewards.length === 1 ? 'reward' : 'rewards'}
        </Text>
      </View>
      <FlatList
        data={collectedRewards}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={renderEmpty}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
  },
  headerCount: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  listContent: {
    paddingVertical: 8,
  },
  emptyContainer: {
    paddingVertical: 60,
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default CollectedRewardsScreen;
