import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AvailableRewardsScreen from '../screens/AvailableRewardsScreen';
import CollectedRewardsScreen from '../screens/CollectedRewardsScreen';
import { Text, View, StyleSheet } from 'react-native';

export type TabParamList = {
  Available: undefined;
  Collected: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabIcon = ({ label, focused }: { label: string; focused: boolean }) => (
  <View style={styles.iconContainer}>
    <View
      style={[
        styles.iconCircle,
        focused ? styles.iconCircleFocused : styles.iconCircleUnfocused,
      ]}
    />
    <Text
      numberOfLines={1}
      style={[
        styles.iconLabel,
        focused ? styles.iconLabelFocused : styles.iconLabelUnfocused,
      ]}
    >
      {label}
    </Text>
  </View>
);

const availableTabOptions = {
  tabBarIcon: ({ focused }: { focused: boolean }) => (
    <TabIcon label="Available" focused={focused} />
  ),
};

const collectedTabOptions = {
  tabBarIcon: ({ focused }: { focused: boolean }) => (
    <TabIcon label="Collected" focused={focused} />
  ),
};

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Available"
        component={AvailableRewardsScreen}
        options={availableTabOptions}
      />
      <Tab.Screen
        name="Collected"
        component={CollectedRewardsScreen}
        options={collectedTabOptions}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 70,
    paddingTop: 8,
    paddingBottom: 8,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    backgroundColor: '#fff',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 80,
  },
  iconCircle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginBottom: 4,
  },
  iconCircleFocused: {
    backgroundColor: '#4CAF50',
  },
  iconCircleUnfocused: {
    backgroundColor: '#E0E0E0',
  },
  iconLabel: {
    fontSize: 12,
  },
  iconLabelFocused: {
    color: '#4CAF50',
    fontWeight: '600',
  },
  iconLabelUnfocused: {
    color: '#666',
    fontWeight: '400',
  },
});

export default TabNavigator;
