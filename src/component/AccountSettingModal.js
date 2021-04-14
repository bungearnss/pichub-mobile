import React, { Component } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from "react-native";
import { IMAGE } from "../constants/Image";
import { Avatar } from "react-native-paper";
import { AntDesign, Entypo } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import KeyboardSpacer from "react-native-keyboard-spacer";
import CustomButton from "../component/CustomButton";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { httpClient } from "../../core/HttpClient";
import AsyncStorage from "@react-native-async-storage/async-storage";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default class AccountSettingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      check_usernameChange: false,
      check_emailChange: false,
      check_profilenameChange: false,
      backgroundpic: "",
      profilepic: "",
      username: "",
      password: "",
      conpass: "",
      email: "",
      profilename: "",
      bio: "",
      hasPermission: "",
      backgroundpic_new: "",
      profilepic_new: "",
      username_old: "",
      password_old: "",
      email_old: "",
      profilename_old: "",
      bio_old: "",
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      isModalVisible: nextProps.isModalVisible,
      backgroundpic: nextProps.backgroundpic,
      profilepic: nextProps.profilepic,
      username_old: nextProps.username,
      password_old: nextProps.password,
      email_old: nextProps.email,
      profilename_old: nextProps.profilename,
      bio_old: nextProps.bio,
    });
  }

  closeModal = () => {
    this.props.changeModalVisibility(false);
  };

  changeModalVisibility = (bool) => {
    this.setState({ isModalVisible: bool });
  };

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
      this.setState({ profilepic_new: result });
    }
  };

  picBackgroud = async () => {
    let backgroud = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Image,
      allowsEditing: true,
      quality: 1,
    });
    if (!backgroud.cancelled) {
      this.setState({ backgroundpic_new: backgroud });
    }
  };

  handleUsernameChange = (username) => {
    console.log(`username: ${username}`);
    if (username.trim().length < 6) {
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
    this.setState({ password: password });
  };

  handlerConpassChange = (conpass) => {
    console.log(`conpass: ${conpass}`);
    this.setState({ conpass: conpass });
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
        email: email,
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
        profilename: profilename,
      });
    }
  };

  handlerBioChange = (bio) => {
    console.log(`bio: ${bio}`);
    this.setState({ bio: bio });
  };

  checkEmty() {
    if (this.state.username == "") {
      return "กรุณากรอก username";
    } else if (this.state.password == "") {
      return "กรุณากรอก password";
    } else if (this.state.email == "") {
      return "กรุณากรอก email";
    } else if (this.state.profilename == "") {
      return "กรุณากรอก profile name";
    } else if (this.state.bio == "") {
      return "กรุณากรอก bio"
    } else {
      return "success";
    }
  }

  async onConfirmPressed() {
    let user_id = await AsyncStorage.getItem("userId");
    console.log(`user id:::: ${user_id}`);
    let check_param = this.checkEmty();
    if (check_param == "success") {
      const {
        username,
        password,
        conpass,
        email,
        profilename,
        bio,
        password_old,
        profilepic,
        backgroundpic,
        profilepic_new,
        backgroundpic_new,
      } = this.state;
      if (password === conpass || password_old === conpass) {
        if (profilepic_new == "" || backgroundpic_new == "") {
          const data_profile = new FormData();
          data_profile.append(
            'file', 
            JSON.stringify({
              type: 'image/png',
              name: user_id,
              uri: profilepic.uri
            })
          );

          const data_bg = new FormData()
          data_bg.append('file', {
            name: user_id,
            type: 'image/png',
            uri: backgroundpic.uri
          })

          const params_1 = {
            user_id: user_id,
            username: username,
            password: password,
            profilename: profilename,
            email: email,
            bio: bio,
            profilepicture: data_profile,
            backgroundpicture: data_bg,
          };
          console.log(`param_1: ${params_1}`);
          await httpClient
            .put(`/user`, params_1)
            .then(async (response) => {
              const result = response.data;
              if (result.results == true) {
                this.props.navigation.navigate("Timeline");
              } else {
                Alert.alert("แก้ไขข้อมูลไม่สำเร็จ")
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } else {

          const data_profile = new FormData();
          data_profile.append('file', {
            name: user_id,
            type: 'image/png',
            uri: profilepic_new.uri
          });

          const data_bg = new FormData()
          data_bg.append('file', {
            name: user_id,
            type: 'image/png',
            uri: backgroundpic_new.uri
          })

          const params_2 = {
            user_id: user_id,
            username: username,
            password: password,
            profilename: profilename,
            email: email,
            bio: bio,
            profilepicture: data_profile,
            backgroundpicture: data_bg,
          };
          console.log(`param_2: ${params_2}`);
          await httpClient
            .put(`/user`, params_2)
            .then(async (response) => {
              const result = response.data;
              if (result.results == true) {
                this.props.navigation.navigate("Timeline");
              } else {
                Alert.alert("แก้ไขข้อมูลไม่สำเร็จ")
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
        /* const params = {
          username: username,
          password: password,
          email: email,
          profilename: profilename,
          bio: bio,
        };
        console.log(`param: ${params}`);
        this.closeModal(); */
      } else {
        Alert.alert("ยืนยันรหัสผ่านไม่ถูกต้อง");
      }
    } else {
      Alert.alert(check_param);
    }
  }

  render() {
    console.log(`new profile: ${this.state.profilepic_new}`);
    console.log(`new bg: ${this.state.backgroundpic_new}`);
    console.log(`username: ${this.state.username}`);
    return (
      <Modal
        visible={this.state.isModalVisible}
        onRequestClose={() => {
          this.props.changeModalVisibility(false);
        }}
        animationType="fade"
        transparent={true}
      >
        <View style={styles.container}>
          <View style={styles.subbackgroud}>
            <TouchableOpacity onPress={() => this.picBackgroud()}>
              {this.state.backgroundpic_new ? (
                <View>
                  <Image
                    source={{ uri: this.state.backgroundpic_new.uri }}
                    style={styles.imagebackground}
                  />
                  <Image source={IMAGE.EDIT} style={styles.editbackground} />
                </View>
              ) : (
                <View>
                  {this.state.backgroundpic == "" ? (
                    <View>
                      <Image
                        source={{ uri: this.state.backgroundpic }}
                        style={styles.imagebackground}
                      />
                      <Image
                        source={IMAGE.EDIT}
                        style={styles.editbackground}
                      />
                    </View>
                  ) : (
                    <View>
                      <Image
                        source={IMAGE.BACKGROUND_DEFAULT}
                        style={styles.imagebackground}
                      />
                      <Image
                        source={IMAGE.EDIT}
                        style={styles.editbackground}
                      />
                    </View>
                  )}
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.profileposition}
              onPress={() => this.pickImage()}
            >
              {this.state.profilepic_new ? (
                <View>
                  <Avatar.Image
                    size={130}
                    source={{ uri: this.state.profilepic_new.uri }}
                  />
                  <Image source={IMAGE.ADD} style={styles.addimg} />
                </View>
              ) : (
                <View>
                  {this.state.profilepic == "" ? (
                    <View>
                      <Avatar.Image
                        size={130}
                        source={{ uri: this.state.profilepic }}
                        style={{ backgroundColor: "#F9EDE0" }}
                      />
                      <Image source={IMAGE.ADD} style={styles.addimg} />
                    </View>
                  ) : (
                    <View>
                      <Avatar.Image
                        size={130}
                        source={IMAGE.PROFILE_DEFAULT}
                        style={{ backgroundColor: "#F9EDE0" }}
                      />
                      <Image source={IMAGE.ADD} style={styles.addimg} />
                    </View>
                  )}
                </View>
              )}
            </TouchableOpacity>

            <KeyboardAvoidingView style={{ flex: 1, paddingTop: 70 }}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View
                  style={{
                    flexDirection: "row",
                    alignSelf: "flex-start",
                  }}
                >
                  <Text style={[styles.subject, { paddingLeft: 10 }]}>
                    {" "}
                    Username
                  </Text>
                  <Text style={[styles.subject, { color: "#FF3E24" }]}> *</Text>
                </View>
                <View style={styles.customFrame}>
                  <TextInput
                    style={styles.customText}
                    returnKeyType="next"
                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                    onChangeText={this.handleUsernameChange}
                    placeholder={this.state.username_old}
                  />
                  <KeyboardSpacer />
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
                <View
                  style={{
                    flexDirection: "row",
                    alignSelf: "flex-start",
                    marginTop: 5,
                  }}
                >
                  <Text style={[styles.subject, { paddingLeft: 10 }]}>
                    {" "}
                    Password
                  </Text>
                  <Text style={[styles.subject, { color: "#FF3E24" }]}> *</Text>
                </View>
                <View style={styles.customFrame}>
                  <TextInput
                    style={styles.customText}
                    returnKeyType="next"
                    onSubmitEditing={() => this.refs.txtConpass.focus()}
                    ref={"txtPassword"}
                    onChangeText={this.handlePasswordChange}
                    placeholder={this.state.password_old}
                  />
                  <KeyboardSpacer />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignSelf: "flex-start",
                    marginTop: 5,
                  }}
                >
                  <Text style={[styles.subject, { paddingLeft: 10 }]}>
                    {" "}
                    Confirm Password
                  </Text>
                  <Text style={[styles.subject, { color: "#FF3E24" }]}> *</Text>
                </View>
                <View style={styles.customFrame}>
                  <TextInput
                    style={styles.customText}
                    returnKeyType="next"
                    ref={"txtConpass"}
                    onSubmitEditing={() => this.refs.txtEmail.focus()}
                    onChangeText={this.handlerConpassChange}
                    placeholder="Please Confirm Password"
                  />
                  <KeyboardSpacer />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignSelf: "flex-start",
                    marginTop: 5,
                  }}
                >
                  <Text style={[styles.subject, { paddingLeft: 10 }]}>
                    {" "}
                    Email
                  </Text>
                  <Text style={[styles.subject, { color: "#FF3E24" }]}> *</Text>
                </View>
                <View style={styles.customFrame}>
                  <TextInput
                    style={styles.customText}
                    returnKeyType="next"
                    ref={"txtEmail"}
                    onSubmitEditing={() => this.refs.txtProfileName.focus()}
                    onChangeText={this.handlerEmailChange}
                    placeholder={this.state.email_old}
                  />
                  <KeyboardSpacer />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignSelf: "flex-start",
                    marginTop: 5,
                  }}
                >
                  <Text style={[styles.subject, { paddingLeft: 10 }]}>
                    {" "}
                    Profile name
                  </Text>
                  <Text style={[styles.subject, { color: "#FF3E24" }]}> *</Text>
                </View>
                <View style={styles.customFrame}>
                  <TextInput
                    style={styles.customText}
                    returnKeyType="next"
                    ref={"txtProfileName"}
                    onSubmitEditing={() => this.refs.txtBio.focus()}
                    onChangeText={this.handlerProfileChange}
                    placeholder={this.state.profilename_old}
                  />
                  <KeyboardSpacer />
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignSelf: "flex-start",
                    marginTop: 5,
                  }}
                >
                  <Text style={[styles.subject, { paddingLeft: 10 }]}>
                    {" "}
                    Bio
                  </Text>
                  <Text style={[styles.subject, { color: "#FF3E24" }]}> *</Text>
                </View>
                <View style={styles.biobox}>
                  <TextInput
                    style={styles.customText}
                    returnKeyType="done"
                    ref={"txtBio"}
                    onChangeText={this.handlerBioChange}
                    placeholder={this.state.bio_old}
                  />
                  <KeyboardSpacer />
                </View>
                <View style={styles.botton}>
                  <CustomButton
                    title="BACK"
                    onPress={() => this.closeModal()}
                  />
                  <CustomButton
                    title="CONFIRM"
                    onPress={() => [this.onConfirmPressed()]}
                  />
                </View>
              </ScrollView>
            </KeyboardAvoidingView>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(100,100,100,0.7)",
    alignItems: "center",
    justifyContent: "center",
  },
  subbackgroud: {
    backgroundColor: "#F8F8F8",
    width: width * 0.92,
    flex: 0.9,
    borderRadius: 25,
    paddingBottom: 20,
    alignItems: "center",
  },
  editbackground: {
    backgroundColor: "#FFF",
    borderRadius: 70,
    width: 26,
    height: 26,
    position: "absolute",
    right: "2%",
    top: "6%",
  },
  imagebackground: {
    resizeMode: "cover",
    justifyContent: "center",
    width: width * 0.92,
    height: height * 0.27,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignSelf: "center",
  },
  profileposition: {
    position: "absolute",
    top: height * 0.16,
    borderRadius: 70,
    flex: 1,
    backgroundColor: "yellow",
  },
  addimg: {
    backgroundColor: "#FFF",
    borderRadius: 70,
    width: 26,
    height: 26,
    position: "absolute",
    left: "75%",
  },
  customText: {
    color: "#6B9089",
    fontSize: 16,
    width: width * 0.735,
    height: height * 0.062,
    paddingLeft: 20,
  },
  subject: {
    fontSize: 18,
    fontWeight: "bold",
  },
  customFrame: {
    width: width * 0.8,
    height: height * 0.053,
    backgroundColor: "#FFF",
    borderRadius: 20,
    marginVertical: 5,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: Platform.OS === "ios" ? 0.22 : 3.54,
    shadowRadius: 3,
    elevation: Platform.OS === "ios" ? 2 : 3,
    flexDirection: "row",
    alignItems: "center",
  },
  biobox: {
    width: width * 0.8,
    height: height * 0.23,
    backgroundColor: "#FFF",
    borderRadius: 20,
    marginVertical: 5,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: Platform.OS === "ios" ? 0.22 : 3.54,
    shadowRadius: 3,
    elevation: Platform.OS === "ios" ? 2 : 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  botton: {
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
