import React, { memo } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Reward } from '../types/reward';

interface RewardItemProps {
  reward: Reward;
}

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width - 32;

const RewardItem: React.FC<RewardItemProps> = ({ reward }) => {
  const imageUrl = reward.image ? reward.image : null;

  return (
    <View style={styles.container}>
      {imageUrl && (
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={2}>
          {reward.name}
        </Text>
        <View style={styles.footer}>
          <View style={styles.pointsContainer}>
            <Text style={styles.points}>{reward.needed_points}</Text>
            <Text style={styles.pointsLabel}>points</Text>
          </View>
          <TouchableOpacity
            style={styles.collectButton}
            onPress={() => {}}
            activeOpacity={0.8}
          >
            <Text style={styles.collectButtonText}>Collect</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: '#f0f0f0',
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  points: {
    fontSize: 24,
    fontWeight: '700',
    color: '#4CAF50',
    marginRight: 4,
  },
  pointsLabel: {
    fontSize: 14,
    color: '#666',
  },
  collectButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
  },
  collectButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default memo(RewardItem);
