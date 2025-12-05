import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ScreenHeaderProps {
  title: string;
}

export const ScreenHeader: React.FC<ScreenHeaderProps> = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
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
});
