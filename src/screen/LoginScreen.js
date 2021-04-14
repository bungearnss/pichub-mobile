import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Dimensions,
  Keyboard,
  TouchableOpacity,
  Image,
  Platform,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import * as Facebook from "expo-facebook";
import { LoginStyle } from "../styles/LoginStyle";
import FooterLine from "../constants/svg/FooterLine";
import AppLogo from "../constants/svg/AppLogo";
import {
  Entypo,
  FontAwesome5,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import CustomButton from "../component/CustomButton";
import { IMAGE } from "../constants/Image";
import { httpClient } from "../../core/HttpClient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {StackActions} from '@react-navigation/native';

const { width } = Dimensions.get("window");
const height = width * 0.3;

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secureTextEntry: true,
      username: "",
      password: "",
      checked: true,
      isValidUser: true,
      isValidPassword: true,
      check_textInputChange: false,
    };
  }

  checkempty(){
    if (this.state.username == ''){
      return "กรุณากรอก Username"
    }
    else if (this.state.password == ''){
      return "กรุณากรอก Password"
    }
    else {
      return "success"
    }
  }

  async onLoginPressed(){
    let check_temp = this.checkempty()
    if (check_temp == 'success'){
      const {username, password} = this.state;
      const params = {username: username, password: password};

      httpClient
      .post('/login', params)
      .then(async response => {
        const result = response.data;
        if (result.result == true){
          //save token
          await AsyncStorage.setItem("userId", result.user_id.toString());
          await AsyncStorage.setItem("token", result.token);
          this.props.navigation.dispatch(StackActions.replace("Timeline"))
        } else {
          Alert.alert('Username หรือ Password ไม่ถูกต้อง กรุณาลองใหม่');
        }
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

  async logInFB() {
    try {
      await Facebook.initializeAsync({
        appId: "476360440055055",
      });
      const {
        type,
        token,
        expirationDate,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile"],
      });
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${token}`
        );
        Alert.alert("Logged in!", `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }

  secureTextEntry() {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
    });
  }

  AbleCheckbox() {
    this.setState(
      {
        checked: !this.state.checked,
      },
      console.log(`checked STATE: ${this.state.checked}`)
    );
  }

  textInputChange(value) {
    console.log(`username: ${value}`);
    if (value.trim().length == 0) {
      this.setState({
        check_textInputChange: false,
      });
    } else {
      this.setState({
        check_textInputChange: true,
        username: value,
      });
    }
  }

  render() {
    console.log(`username STATE: ${this.state.username}`);
    console.log(`password STATE: ${this.state.username}`);
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={LoginStyle.containers}>
          <Animatable.View animation="fadeInUpBig" style={LoginStyle.header}>
            <AppLogo />
          </Animatable.View>

          <Animatable.View animation="fadeInUpBig" style={LoginStyle.footer}>
            <View style={[LoginStyle.action, { marginTop: 20 }]}>
            <FontAwesome5 name="user-alt" size={16} color="#B3B3B3" style={{alignSelf: 'center', paddingLeft: 15}}/>
              <TextInput
                placeholder="USERNAME"
                placeholderTextColor="#646466"
                style={[LoginStyle.custominput, {position:'absolute', left: 32}]}
                returnKeyType="next"
                onSubmitEditing={() => this.refs.txtPassword.focus()}
                onChangeText={(text) => [
                  this.textInputChange(text),
                  this.setState({
                    username: text,
                  }) /* console.log(`username: ${this.state.username}`) */,
                ]}
              />
              {this.state.check_textInputChange ? (
                <Animatable.View
                  animation="bounceIn"
                  style={{ alignSelf: "center", paddingRight: 20 }}
                >
                  <AntDesign name="checkcircleo" size={17} color="#B3B3B3" />
                </Animatable.View>
              ) : null}
            </View>

            <View style={LoginStyle.action}>
            <FontAwesome5 name="lock" size={16} color="#B3B3B3" style={{alignSelf: 'center', paddingLeft: 15}}/>
              {this.state.secureTextEntry ? (
                <TextInput
                  placeholder="PASSWORD"
                  placeholderTextColor="#646466"
                  style={LoginStyle.custominput}
                  secureTextEntry={true}
                  autoCapitalize="none"
                  ref={"txtPassword"}
                  returnKeyType="go"
                  value={this.state.password}
                  onChangeText={(text) =>
                    this.setState(
                      {
                        password: text,
                      }
                    )
                  }
                />
              ) : (
                <TextInput
                  placeholder="PASSWORD"
                  placeholderTextColor="#646466"
                  style={LoginStyle.custominput}
                  autoCapitalize="none"
                  ref={"txtPassword"}
                  returnKeyType="go"
                  value={this.state.password}
                  onChangeText={(text) =>
                    this.setState({
                      password: text,
                    })
                  }
                />
              )}

              <TouchableOpacity
                onPress={() => this.secureTextEntry()}
                style={{ alignSelf: "center", paddingRight: 20 }}
              >
                {this.state.secureTextEntry ? (
                  <Entypo name="eye-with-line" size={20} color="#B3B3B3" />
                ) : (
                  <Entypo name="eye" size={20} color="#B3B3B3" />
                )}
              </TouchableOpacity>
            </View>

            <View style={LoginStyle.buttonspace}>
              <CustomButton title="REGISTER" onPress={() => this.props.navigation.navigate("Agreement")} />
              <CustomButton title="SIGN IN" onPress={() => this.onLoginPressed()}/>
            </View>

            <View style={LoginStyle.checkboxcontainer}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity onPress={() => this.AbleCheckbox()}>
                  {this.state.checked ? (
                    <Image source={IMAGE.UNCHECK} style={LoginStyle.checkbox} />
                  ) : (
                    <Image source={IMAGE.CHECKED} style={LoginStyle.checkbox} />
                  )}
                </TouchableOpacity>
                <Text style={{ fontSize: 11, color: "#646466" }}>
                  REMEMBER ME
                </Text>
              </View>
              <TouchableOpacity>
                <Text style={{ fontSize: 11, color: "#646466" }}>
                  FORGET PASSWORD ?
                </Text>
              </TouchableOpacity>
            </View>
            <FooterLine />

            <View style={LoginStyle.socialView}>
              <TouchableOpacity onPress={() => this.logInFB()}>
                <FontAwesome5
                  name="facebook-square"
                  size={Platform.OS === "ios" ? 55 : 47}
                  color="#4267B2"
                  style={{ marginHorizontal: 15 }}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <FontAwesome
                  name="google-plus-square"
                  size={Platform.OS === "ios" ? 55 : 47}
                  color="#F44336"
                  style={{ marginHorizontal: 15 }}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <FontAwesome5
                  name="line"
                  size={Platform.OS === "ios" ? 55 : 47}
                  color="#4CAF50"
                  style={{ marginHorizontal: 15 }}
                />
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
