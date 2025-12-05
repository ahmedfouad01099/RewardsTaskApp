import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface EmptyStateProps {
  message: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ message }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
});
