import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const LoadingState: React.FC = () => (
  <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
    <View style={styles.centerContainer}>
      <ActivityIndicator size="large" color="#4CAF50" />
      <Text style={styles.loadingText}>Loading rewards...</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
});
