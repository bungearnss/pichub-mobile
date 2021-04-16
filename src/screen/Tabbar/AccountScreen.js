import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Modal,
  Permission,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import * as ScreenCapture from "expo-screen-capture";
import { AccountStyle } from "../../styles/AccountStyle";
import { IMAGE } from "../../constants/Image";
import { Avatar } from "react-native-paper";
import AccountSettingModal from "../../component/AccountSettingModal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LogoutModal from "../../component/LogoutModal";
import { httpClient } from "../../../core/HttpClient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions } from "@react-navigation/native";

const numColumns = 2;

export default class AccountScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      islogoutVisible: false,
      img_id: null,
      img_title: null,
      dataList: "",
      img_src: "",
      img_cate: "",
      img_price: "",
      img_stock: "",
      backgroundpic: "",
      profilepic: "",
      username: "",
      password: "",
      email: "",
      profilename: "",
      bio: "",
    };
  }

  async componentDidMount() {
    // This permission is only required on Android
    /*  const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === 'granted') {
      ScreenCapture.addScreenshotListener(() => {
        alert('ไม่อนุญาตให้นำรูปของศิลปินท่านอื่นไปใช้งานนอกแอปพลิเคชัน หากพบเห็นจะดำเนินการทางกฎหมาย 😊');
      });
    } */

    let user_id = await AsyncStorage.getItem("userId");

    await httpClient
      .get(`user/${user_id}`)
      .then((response) => {
        const result = response.data;

        if (result.results == true) {
          this.setState({
            backgroundpic: result.backgroundpic,
            profilepic: result.profilepic,
            username: result.username,
            password: result.password,
            email: result.email,
            profilename: result.profilename,
            bio: result.bio,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    await httpClient
      .get(`post/${user_id}`)
      .then((response) => {
        const img = response.data;

        this.setState({ dataList: img });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onPressOpenLogout() {
    this.setState({ islogoutVisible: true });
  }

  closeLogoutModal = (bool) => {
    this.setState({ islogoutVisible: bool });
  };

  async onLogoutPress() {
    await AsyncStorage.removeItem("token");
    this.props.navigation.dispatch(StackActions.replace("Login"));
  }

  onPressModal() {
    this.setState({
      isModalVisible: true,
      backgroundpic: this.state.backgroundpic,
      profilepic: this.state.profilepic,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      profilename: this.state.profilename,
      bio: this.state.bio,
    });
  }

  changeModalVisibility = (bool) => {
    this.setState({ isModalVisible: bool });
  };

  formatData = (dataList, numColumns) => {
    const totalRows = Math.floor(dataList.length / numColumns);
    let totalLastRow = dataList.length - totalRows * numColumns;

    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      dataList.push({ key: "blank", empty: true });
      totalLastRow++;
    }
    return dataList;
  };

  _renderItem = ({ item, index }) => {
    if (item.empty) {
      return (
        <View style={[AccountStyle.itemInvisible, AccountStyle.itemStyle]} />
      );
    }
    return (
      <View style={AccountStyle.imgContainer}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Buy", {value: item})}>
          <View style={AccountStyle.imageBox}>
            <Image
              style={AccountStyle.imgSize}
              source={{ uri: item.img_src }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    const {
      backgroundpic,
      profilepic,
      username,
      password,
      email,
      profilename,
      bio,
    } = this.state;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={AccountStyle.container}>
          <StatusBar hidden />
          <View
            style={{
              alignItems: "center",
              marginBottoml: 40,
              justifyContent: "space-between",
            }}
          >
            <View style={{ flex: 1 }}>
              {backgroundpic ? (
                <View>
                  <Image
                    source={{ uri: backgroundpic }}
                    style={AccountStyle.background}
                  />
                </View>
              ) : (
                <View>
                  <Image
                    source={IMAGE.BACKGROUND_DEFAULT}
                    style={AccountStyle.background}
                  />
                </View>
              )}
              <View style={AccountStyle.profile}>
                {profilepic ? (
                  <View>
                    <Avatar.Image size={145} source={{ uri: profilepic }} />
                  </View>
                ) : (
                  <View>
                    <Avatar.Image
                      size={145}
                      source={IMAGE.PROFILE_DEFAULT}
                      style={{ backgroundColor: "#F9EDE0" }}
                    />
                  </View>
                )}
              </View>
              <View style={AccountStyle.bioView}>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                  {profilename}
                </Text>
                <Text style={{ fontSize: 17 }}>{bio}</Text>
              </View>
              <View style={AccountStyle.buttonView}>
                <TouchableOpacity
                  style={AccountStyle.button}
                  onPress={() =>
                    this.onPressModal(
                      backgroundpic,
                      profilepic,
                      username,
                      password,
                      email,
                      profilename,
                      bio
                    )
                  }
                >
                  <Text style={AccountStyle.buttonFont}>Edit Profile</Text>
                </TouchableOpacity>
                <AccountSettingModal
                  isModalVisible={this.state.isModalVisible}
                  changeModalVisibility={(bool) => {
                    this.changeModalVisibility(bool);
                  }}
                  backgroundpic={backgroundpic}
                  profilepic={profilepic}
                  username={username}
                  password={password}
                  email={email}
                  profilename={profilename}
                  bio={bio}
                />
                <TouchableOpacity 
                  style={AccountStyle.button} 
                  onPress={() => this.onPressOpenLogout()}>
                  <Text style={AccountStyle.buttonFont}>LOG OUT</Text>
                </TouchableOpacity>
                <LogoutModal
                  islogoutVisible={this.state.islogoutVisible}
                  closeLogoutModal={(bool) => {
                    this.closeLogoutModal(bool);
                  }}
                  LOGOUT={() => this.onLogoutPress()}
                />
              </View>
              <View style={AccountStyle.line} />
              <View style={{ paddingHorizontal: 5 }}>
                <FlatList
                  data={this.formatData(this.state.dataList, numColumns)}
                  renderItem={this._renderItem}
                  keyExtractor={(item, index) => index.toString()}
                  numColumns={numColumns}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
