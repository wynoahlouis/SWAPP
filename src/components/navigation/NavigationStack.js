// Import necessary libraries and components
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; 
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import RegistrationPage from "../pages/RegistrationPage";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import SleepTrackerPage from "../pages/SleepTrackerPage";
import BMICalculatorPage from "../pages/BMICalculatorPage";
import EditProfilePage from "../pages/EditProfilePage";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="HomeTab"
      component={HomePage}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
        headerShown: false
      }}
    />
    <Tab.Screen
      name="SleepTracker"
      component={SleepTrackerPage}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="moon" color={color} size={size} />
        ),
        headerShown: false
      }}
    />
    <Tab.Screen
      name="BMICalculator"
      component={BMICalculatorPage}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="calculator" color={color} size={size} />
        ),
        headerShown: false
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfilePage}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person" color={color} size={size} />
        ),
        headerShown: false
      }}
    />
  </Tab.Navigator>
);

const CustomStackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      options={{ headerShown: false }}
      name="Landing"
      component={LandingPage}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="Login"
      component={LoginPage}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="Register"
      component={RegistrationPage}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="Home"
      component={HomeTabNavigator}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="Profile"
      component={ProfilePage}
    />
    <Stack.Screen
      options={{ headerShown: false }}
      name="EditProfile"
      component={EditProfilePage}
    />
  </Stack.Navigator>
);

const NavigationStack = () => <CustomStackNavigator />;

export default NavigationStack;
