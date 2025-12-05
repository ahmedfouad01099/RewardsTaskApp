import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

interface ListFooterProps {
  loading: boolean;
}

export const ListFooter: React.FC<ListFooterProps> = ({ loading }) => {
  if (!loading) {
    return null;
  }

  return (
    <View style={styles.footer}>
      <ActivityIndicator size="large" color="#4CAF50" />
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
});
