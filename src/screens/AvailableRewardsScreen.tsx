import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AvailableRewardsScreen: React.FC = () => {
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
