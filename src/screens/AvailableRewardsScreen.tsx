import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRewards } from '../hooks/useRewards';

const AvailableRewardsScreen: React.FC = () => {
  const { rewards } = useRewards();
  console.log('7-', rewards);

  return (
    <View style={styles.container}>
      <Text>AvailableRewardsScreen</Text>
    </View>
  );
};

export default AvailableRewardsScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
