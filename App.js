import React, { Component } from "react";
import { 
  StyleSheet,
  LogBox,
  Dimensions,
} from "react-native";
import LoginScreen from "./src/screen/LoginScreen";
import AgreementScreen from "./src/screen/AgreementScreen";
import RegisterScreen from "./src/screen/RegisterScreen";
import CategoryScreen from './src/screen/CategoryScreen';
import TopicsScreen from './src/screen/TopicsScreen';
import SearchcateScreen from './src/screen/Tabbar/SearchcateScreen';
import TimelineScreen from './src/screen/Tabbar/TimelineScreen';
import AccountScreen from './src/screen/Tabbar/AccountScreen';
import LoadingScreen from './src/screen/LoadingScreen';
import DashboardScreen from './src/screen/Tabbar/DashBoardScreen';
import PostScreen from './src/screen/Tabbar/PostScreen';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome, Foundation, FontAwesome5 } from '@expo/vector-icons'; 
import { View } from "react-native-animatable";
import BuyScreen from './src/screen/BuyScreen';

LogBox.ignoreAllLogs()
const Stack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();
function TabNavigator(){
  return (
    <Tab.Navigator
      initialRouteName= "Timeline"
      activeColor="#FFF"
      inactiveColor="#8CCDC1"
      barStyle={styles.barStyle}
    >
      <Tab.Screen
        name="Timeline"
        component={TimelineScreen}
        options={{
          tabBarLabel: ' ',
          tabBarIcon: ({focused}) => 
          focused ? (
            <View style={styles.focusedView}>
            <FontAwesome5 name="home" size={27} color="#000" />
            </View>
          ) : (
            <View>
            <FontAwesome5 name="home" size={25} color="#FFF" />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchcateScreen}
        options={{
          tabBarLabel: ' ',
          tabBarIcon: ({focused}) => 
          focused ? (
            <View style={styles.focusedView}> 
              <FontAwesome name="search" size={27} color="black" />
            </View>
          ) : (
            <FontAwesome name="search" size={25} color="#FFF" />
          )
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          tabBarLabel: ' ',
          tabBarIcon: ({focused}) => 
          focused ? (
            <View style={styles.focusedView}>
              <FontAwesome name="plus" size={27} color="black" />
            </View>
          ) : (
            <FontAwesome name="plus" size={25} color="#FFF" />
          )
        }}
      />
      <Tab.Screen
        name="DashBoard"
        component={DashboardScreen}
        options={{
          tabBarLabel: ' ',
          tabBarIcon: ({focused}) => 
          focused ? (
            <View style={styles.focusedView}>
              <Foundation name="graph-bar" size={27} color="black" />
            </View>
          ) : (
            <Foundation name="graph-bar" size={25} color="#FFF" />
          )
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: ' ',
          tabBarIcon: ({focused}) => 
          focused ? (
            <View style={styles.focusedView}>
              <FontAwesome name="user" size={27} color="black" />
            </View>
          ) : (
              <FontAwesome name="user" size={25} color="#FFF" />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="loading" style={styles.container}>
        {/* <Stack.Screen
          name="loading"
          component={LoadingScreen}
          options={{ headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        /> */}
        {/* <Stack.Screen
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
        /> */}
        <Stack.Screen
          name="HomeApp"
          component={TabNavigator}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Buy"
          component={BuyScreen}
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
  barStyle: {
    backgroundColor: '#8CCDC1', 
    height: '9.5%', 
    justifyContent: 'center', 
    width: '100%',
  },
  focusedView: {
    backgroundColor: '#FFF', 
    width: 70, 
    height: 52,
    bottom: 7,
    borderRadius: 5,
    justifyContent: 'center', 
    alignItems: 'center',
  }
});
