import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
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
      check_usernameChange: false,
      check_emailChange: false,
      check_profilenameChange: false,
      profilepic: null,
      backgroundpic: null,
      securePassword: true,
      secureConpass: true,
      username: "",
      password: "",
      conpass: "",
      email: "",
      profilename: "",
      bio: "",
    };
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

  handleUsernameChange = (username) => {
    console.log(`username: ${username}`);
    if (username.trim().length == 0) {
      this.setState({
        check_usernameChange: false,
      });
    } else {
      this.setState({
        check_usernameChange: true,
        username: username,
      });
    }
  };

  handlePasswordChange = (password) => {
    console.log(`password: ${password}`);
    // this.setState({ password: password });
    this.setState({ password });
  };

  handlerConpassChange = (conpass) => {
    console.log(`conpass: ${conpass}`);
    // this.setState({ conpass: conpass });
    this.setState({ conpass });
  };

  handlerEmailChange = (email) => {
    console.log(`email: ${email}`);
    if (email.trim().length == 0) {
      this.setState({
        check_emailChange: false,
      });
    } else {
      this.setState({
        check_emailChange: true,
        // email: email,
        email,
      });
    }
  };

  handlerProfileChange = (profilename) => {
    console.log(`profilename: ${profilename}`);
    if (profilename.trim().length == 0) {
      this.setState({
        check_profilenameChange: false,
      });
    } else {
      this.setState({
        check_profilenameChange: true,
        // profilename: profilename,
        profilename,
      });
    }
  };

  handlerBioChange = (bio) => {
    console.log(`bio: ${bio}`);
    // this.setState({ bio: bio });
    this.setState({ bio });
  };

  securePassword() {
    this.setState({
      securePassword: !this.state.securePassword,
    });
  }

  secureConpass() {
    this.setState({
      secureConpass: !this.state.secureConpass,
    });
  }

  checkEmty() {
    if (this.state.username == "") {
      return "กรุณากรอก username";
    } else if (this.state.password == "") {
      return "กรุณากรอก password";
    } else if (this.state.email == "") {
      return "กรุณากรอก email";
    } else if (this.state.profilename == "") {
      return "กรุณากรอก profile name";
    } else {
      return "success";
    }
  }

  onRegisterPressed() {
    let check_param = this.checkEmty();
    if (check_param == "success") {
      const {
        username,
        password,
        conpass,
        email,
        profilename,
        bio,
      } = this.state;
      if (password === conpass) {
        const params = {
          username: username,
          password: password,
          email: email,
          profilename: profilename,
          bio: bio,
        };
        this.props.navigation.navigate("Category")
      } else {
        Alert.alert("ยืนยันรหัสผ่านไม่ถูกต้อง");
      }
    } else {
      Alert.alert(check_param);
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={RegisterStyle.backgroud}>
          <View style={RegisterStyle.subbackgroud}>
            <View
              style={{
                alignItems: "center",
                marginBottoml: 40,
                justifyContent: "space-between",
              }}
            >
              <View style={{ height: 265 }}>
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
              </View>

              <TouchableOpacity
                style={RegisterStyle.profileposition}
                onPress={() => this.pickImage()}
              >
                {this.state.profilepic ? (
                  <View>
                    <Avatar.Image
                      size={145}
                      source={{ uri: this.state.profilepic.uri }}
                    />
                    <Image source={IMAGE.ADD} style={RegisterStyle.addimg} />
                  </View>
                ) : (
                  <View>
                    <Avatar.Image
                      size={145}
                      source={IMAGE.PROFILE_DEFAULT}
                      style={{ backgroundColor: "#F9EDE0" }}
                    />
                    <Image source={IMAGE.ADD} style={RegisterStyle.addimg} />
                  </View>
                )}
              </TouchableOpacity>
            </View>

            <KeyboardAvoidingView style={{ flex: 1 }}>
              <ScrollView showsVerticalScrollIndicator={false}>
                {/* Username */}
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Text style={[RegisterStyle.subject, { paddingLeft: 10 }]}>
                    {" "}
                    Username
                  </Text>
                  <Text style={[RegisterStyle.subject, { color: "#FF3E24" }]}>
                    {" "}
                    *
                  </Text>
                </View>
                <View style={RegisterStyle.customFrame}>
                  <TextInput
                    style={RegisterStyle.customText}
                    returnKeyType="next"
                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                    onChangeText={this.handleUsernameChange}
                  />
                  {this.state.check_usernameChange ? (
                    <Animatable.View
                      animation="bounceIn"
                      style={{ alignSelf: "center" }}
                    >
                      <AntDesign
                        name="checkcircleo"
                        size={16}
                        color="#6B9089"
                      />
                    </Animatable.View>
                  ) : null}
                </View>

                {/* password */}
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                  }}
                >
                  <Text style={[RegisterStyle.subject, { paddingLeft: 10 }]}>
                    {" "}
                    Password
                  </Text>
                  <Text style={[RegisterStyle.subject, { color: "#FF3E24" }]}>
                    {" "}
                    *
                  </Text>
                </View>
                <View style={RegisterStyle.customFrame}>
                  {this.state.securePassword ? (
                    <TextInput
                      style={RegisterStyle.customText}
                      secureTextEntry={true}
                      returnKeyType="next"
                      ref={"txtPassword"}
                      onSubmitEditing={() => this.refs.txtConpass.focus()}
                      onChangeText={this.handlePasswordChange}
                    />
                  ) : (
                    <TextInput
                      style={RegisterStyle.customText}
                      returnKeyType="next"
                      ref={"txtPassword"}
                      onSubmitEditing={() => this.refs.txtConpass.focus()}
                      onChangeText={this.handlePasswordChange}
                    />
                  )}
                  <TouchableOpacity
                    onPress={() => this.securePassword()}
                    style={{ alignSelf: "center", paddingRight: 20 }}
                  >
                    {this.state.securePassword ? (
                      <Entypo name="eye-with-line" size={17} color="#6B9089" />
                    ) : (
                      <Entypo name="eye" size={17} color="#6B9089" />
                    )}
                  </TouchableOpacity>
                </View>

                {/* Confirm password */}
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                  }}
                >
                  <Text style={[RegisterStyle.subject, { paddingLeft: 10 }]}>
                    {" "}
                    Confirm password
                  </Text>
                  <Text style={[RegisterStyle.subject, { color: "#FF3E24" }]}>
                    {" "}
                    *
                  </Text>
                </View>
                <View style={RegisterStyle.customFrame}>
                  {this.state.secureConpass ? (
                    <TextInput
                      style={RegisterStyle.customText}
                      secureTextEntry={true}
                      returnKeyType="next"
                      ref={"txtConpass"}
                      onSubmitEditing={() => this.refs.txtEmail.focus()}
                      onChangeText={this.handlerConpassChange}
                    />
                  ) : (
                    <TextInput
                      style={RegisterStyle.customText}
                      returnKeyType="next"
                      ref={"txtConpass"}
                      onSubmitEditing={() => this.refs.txtEmail.focus()}
                      onChangeText={this.handlerConpassChange}
                    />
                  )}
                  <TouchableOpacity
                    onPress={() => this.secureConpass()}
                    style={{ alignSelf: "center", paddingRight: 20 }}
                  >
                    {this.state.secureConpass ? (
                      <Entypo name="eye-with-line" size={17} color="#6B9089" />
                    ) : (
                      <Entypo name="eye" size={17} color="#6B9089" />
                    )}
                  </TouchableOpacity>
                </View>

                {/* E-mail */}
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                  }}
                >
                  <Text style={[RegisterStyle.subject, { paddingLeft: 10 }]}>
                    {" "}
                    E-mail
                  </Text>
                  <Text style={[RegisterStyle.subject, { color: "#FF3E24" }]}>
                    {" "}
                    *
                  </Text>
                </View>
                <View style={RegisterStyle.customFrame}>
                  <TextInput
                    style={RegisterStyle.customText}
                    returnKeyType="next"
                    ref={"txtEmail"}
                    onSubmitEditing={() => this.refs.txtProfileName.focus()}
                    onChangeText={this.handlerEmailChange}
                  />
                  {this.state.check_emailChange ? (
                    <Animatable.View
                      animation="bounceIn"
                      style={{ alignSelf: "center" }}
                    >
                      <AntDesign
                        name="checkcircleo"
                        size={16}
                        color="#6B9089"
                      />
                    </Animatable.View>
                  ) : null}
                </View>

                {/* Profile Name */}
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                  }}
                >
                  <Text style={[RegisterStyle.subject, { paddingLeft: 10 }]}>
                    {" "}
                    Profile Name
                  </Text>
                  <Text style={[RegisterStyle.subject, { color: "#FF3E24" }]}>
                    {" "}
                    *
                  </Text>
                </View>
                <View style={RegisterStyle.customFrame}>
                  <TextInput
                    style={RegisterStyle.customText}
                    returnKeyType="next"
                    ref={"txtProfileName"}
                    onSubmitEditing={() => this.refs.txtBio.focus()}
                    onChangeText={this.handlerProfileChange}
                  />
                  {this.state.check_profilenameChange ? (
                    <Animatable.View
                      animation="bounceIn"
                      style={{ alignSelf: "center" }}
                    >
                      <AntDesign
                        name="checkcircleo"
                        size={16}
                        color="#6B9089"
                      />
                    </Animatable.View>
                  ) : null}
                </View>

                {/* Bio */}
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                  }}
                >
                  <Text style={[RegisterStyle.subject, { paddingLeft: 10 }]}>
                    {" "}
                    Bio
                  </Text>
                </View>
                <View style={RegisterStyle.biobox}>
                  <TextInput
                    style={RegisterStyle.custombioText}
                    returnKeyType="done"
                    ref={"txtBio"}
                    onChangeText={this.handlerBioChange}
                  />
                </View>

                <View style={RegisterStyle.botton}>
                  <CustomButton
                    title="PREVIOUS"
                    onPress={() => this.props.navigation.goBack()}
                  />
                  <CustomButton title="REGISTER" onPress={() => this.onRegisterPressed()} />
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
