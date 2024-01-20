import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import EditProfilePage from "../pages/EditProfilePage";



const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen
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
        /> */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomePage}
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
    </NavigationContainer>
  );
}