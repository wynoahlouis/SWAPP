import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import HomePage from '../pages/HomePage';
// import BMICalculator from '../pages/LoginPage';
// import SleepTracker from '../pages/LandingPage';
// import ProfilePage from '../pages/ProfilePage';
import { useNavigation } from '@react-navigation/native';
// import LoginPage from "../pages/LoginPage";
// import LandingPage from "../pages/LandingPage";

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home'; 
          } else if (route.name === 'BMI') {
            iconName = focused ? 'heartbeat' : 'heartbeat';
          } else if (route.name === 'SleepTracker') {
            iconName = focused ? 'moon' : 'moon';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#365486',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomePage} />
      {/* <Tab.Screen name="BMICalculator" component={} />
      <Tab.Screen name="SleepTracker" component={} />
      <Tab.Screen name="ProfilePage" component={} /> */}
    </Tab.Navigator>
  );
};

export default AppTabs;
