// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/home";
import InfoScreen from "./screens/info";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Info"
          component={InfoScreen}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "#0B0B0B" },
            headerTintColor: "#fff",
            headerTitle:"About App"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
