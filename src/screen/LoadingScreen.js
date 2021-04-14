import React, { Component } from "react";
import { View, Text, TouchableOpacity, Touchable } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import AppLogo from "../constants/svg/AppLogo";
import { StackActions } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class LoadingScreen extends Component {
  componentDidMount() {
    SplashScreen.hideAsync();
  }

  constructor(props) {
    super(props);
    this.validAuthen();
  }

  async validAuthen() {
    const storedToken = await AsyncStorage.getItem("token");
    if (storedToken != null) {
      this.goHomeScreen();
    } else {
      this.geLoginScreen();
    }
  }

  goHomeScreen = () => {
    this.props.navigation.dispatch(StackActions.replace("HomeApp"));
  };

  geLoginScreen = () => {
    this.props.navigation.dispatch(StackActions.replace("Login"));
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#8CCDC1",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
          <AppLogo />
        </TouchableOpacity>
      </View>
    );
  }
}
