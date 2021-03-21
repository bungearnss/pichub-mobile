import React, { Component } from "react";
import { 
  StyleSheet,
  LogBox 
} from "react-native";
import LoginScreen from "./src/screen/LoginScreen";
import AgreementScreen from "./src/screen/AgreementScreen";
import RegisterScreen from "./src/screen/RegisterScreen";
import CategoryScreen from './src/screen/CategoryScreen';
import TopicsScreen from './src/screen/TopicsScreen';
import TimelineScreen from './src/screen/Tabbar/TimelineScreen';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

LogBox.ignoreAllLogs()
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Category" style={styles.container}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Agreement"
          component={AgreementScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Category"
          component={CategoryScreen}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Topics"
          component={TopicsScreen}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Timeline"
          component={TimelineScreen}
          options={{ headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8CCDC1",
    alignItems: "center",
    justifyContent: "center",
  },
});
