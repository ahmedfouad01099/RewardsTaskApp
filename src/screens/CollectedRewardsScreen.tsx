import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CollectedRewardsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>CollectedRewardsScreen</Text>
    </View>
  );
};

export default CollectedRewardsScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
