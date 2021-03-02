import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { RegisterStyle } from "../styles/RegisterStyle";
import * as Animatable from "react-native-animatable";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { Avatar } from "react-native-paper";
import { IMAGE } from "../constants/Image";
import CustomButton from "../component/CustomButton";

const { height } = Dimensions.get("window");

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check_textInputChange: false,
      profilepic: null,
      backgroundpic: null,
      username: "",
      password: "",
      email: "",
      profilename: "",
      bio: "",
    };
  }

  textInputChange(value) {
    console.log(`value: ${value}`);
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

  //Image Select Function
  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    // Camera roll Permission
    if (Platform.OS === "ios") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
    // Camera Permission
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasPermission: status === "granted" });
  };

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.cancelled) {
      this.setState({ profilepic: result });
    }
  };

  picBackgroud = async () => {
    let backgroud = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Image,
      allowsEditing: true,
      quality: 1,
    });
    if (!backgroud.cancelled) {
      this.setState({ backgroundpic: backgroud });
    }
  };

  render() {
    return (
      <View style={RegisterStyle.backgroud}>
        <View style={RegisterStyle.subbackgroud}>
          <View
            style={{
              alignItems: "center",
              marginBottoml: 40,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={() => this.picBackgroud()}>
              {this.state.backgroundpic ? (
                <Image
                  source={{ uri: this.state.backgroundpic.uri }}
                  style={RegisterStyle.imagebackground}
                />
              ) : (
                <Image
                  source={IMAGE.BACKGROUND_DEFAULT}
                  style={RegisterStyle.imagebackground}
                />
              )}
            </TouchableOpacity>
            {this.state.profilepic ? (
              <Avatar.Image
                size={150}
                source={{ uri: this.state.profilepic.uri }}
                style={RegisterStyle.profileposition}
              />
            ) : (
              <Avatar.Image
                size={150}
                source={IMAGE.PROFILE_DEFAULT}
                style={RegisterStyle.profileposition}
              />
            )}
            <View style={{ marginTop: height * 0.09 }}>
              <CustomButton title="Upload" onPress={() => this.pickImage()} />
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text style={RegisterStyle.subject}> Username</Text>
            <Text style={[RegisterStyle.subject, { color: "#FF3E24" }]}>
              {" "}
              *
            </Text>
          </View>
          <View style={RegisterStyle.customFrame}>
            <TextInput
              style={RegisterStyle.customText}
              returnKeyType="next"
              /* onSubmitEditing={() => this.refs.txtPassword.focus()} */
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
                style={{ justifyContent: "center" }}
              >
                <AntDesign name="checkcircleo" size={17} color="#6B9089" />
              </Animatable.View>
            ) : null}

            <TextInput
              style={RegisterStyle.customText}
              returnKeyType="next"
              /* onSubmitEditing={() => this.refs.txtPassword.focus()} */
              onChangeText={(text) => [
                this.textInputChange(text),
                this.setState({
                  password: text,
                }) /* console.log(`username: ${this.state.username}`) */,
              ]}
            />
            {this.state.check_textInputChange ? (
              <Animatable.View
                animation="bounceIn"
                style={{ justifyContent: "center" }}
              >
                <AntDesign name="checkcircleo" size={17} color="#6B9089" />
              </Animatable.View>
            ) : null}
          </View>

          <View style={{ flexDirection: "row" }}>
            <Text style={[RegisterStyle.subject, { marginTop: 10 }]}>
              {" "}
              Password
            </Text>
            <Text
              style={[
                RegisterStyle.subject,
                { color: "#FF3E24", marginTop: 10 },
              ]}
            >
              {" "}
              *
            </Text>
          </View>
          <View style={RegisterStyle.customFrame}>
            <TextInput
              style={RegisterStyle.customText}
              returnKeyType="next"
              /* onSubmitEditing={() => this.refs.txtPassword.focus()} */
              onChangeText={(text) => [
                this.textInputChange(text),
                this.setState({
                  password: text,
                }) /* console.log(`username: ${this.state.password}`) */,
              ]}
            />
            {this.state.check_textInputChange ? (
              <Animatable.View
                animation="bounceIn"
                style={{ justifyContent: "center" }}
              >
                <AntDesign name="checkcircleo" size={17} color="#6B9089" />
              </Animatable.View>
            ) : null}

            <TextInput
              style={RegisterStyle.customText}
              returnKeyType="next"
              /* onSubmitEditing={() => this.refs.txtPassword.focus()} */
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
                style={{ justifyContent: "center" }}
              >
                <AntDesign name="checkcircleo" size={17} color="#6B9089" />
              </Animatable.View>
            ) : null}
          </View>
        </View>
      </View>
    );
  }
}
