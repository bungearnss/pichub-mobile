import React, { Component } from "react";
import { View, Text, Image, ScrollView, ViewPropTypes } from "react-native";
import { BuyStyle } from "../styles/BuyStyle";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../component/CustomButton";
import { IMAGE } from "../constants/Image";
import { Avatar } from "react-native-paper";
import BuyModal from "../component/BuyModal";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class BuyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      img_id: null,
      img_title: "",
      img_owner: "",
      img_src: "",
      img_price: "",
      img_stock: "",
      img_cate: [],
      checkUser: false,
    };
  }

  async componentDidMount() {
    const { value } = this.props.route.params;
    let user_id = await AsyncStorage.getItem("userId");
    if (value.img_ownerid == user_id) {
      this.setState({ checkUser: true });
    }
    this.setState({
      img_id: value.img_id,
      img_title: value.img_title,
      img_owner: value.img_owner,
      img_src: value.img_src,
      img_price: value.img_price,
      img_stock: value.img_stock,
      img_cate: value.img_cate
    });
  }

  onBuypic() {
    this.setState({
      isModalVisible: true,
      img_id: this.state.img_id,
      img_title: this.state.img_title,
      img_owner: this.state.img_owner,
      img_src: this.state.img_src,
      img_price: this.state.img_price,
      img_stock: this.state.img_stock,
    });
  }

  changeModalVisibility = (bool) => {
    this.setState({ isModalVisible: bool });
  };

  render() {
    const { value } = this.props.route.params;
    return (
      <View style={BuyStyle.containers}>
        <StatusBar hidden />
        <View style={BuyStyle.subcontainer}>
          <View style={BuyStyle.imgContainer}>
            <View style={BuyStyle.profile}>
              {value.profile_pic == "" ? (
                <Avatar.Image size={50} source={IMAGE.PROFILE_DEFAULT} />
              ) : (
                <Avatar.Image size={50} source={{ uri: value.profile_pic }} />
              )}
              <Text
                style={{
                  fontWeight: "bold",
                  marginTop: 10,
                  marginLeft: 12,
                  fontSize: 16,
                }}
              >
                {value.img_owner}
              </Text>
            </View>
            <Image source={{ uri: value.img_src }} style={BuyStyle.imgSty} />
            <View style={BuyStyle.cateContainer}>
              <ScrollView
                style={{ flex: 1 }}
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {this.state.img_cate.map((item, index) => {
                  return (
                    <View style={BuyStyle.cateView} key={index}>
                      <Text style={{ color: "#FFF", fontSize: 13 }}>
                        {item}
                      </Text>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
            <View style={BuyStyle.imgDescript}>
              <Text
                style={{
                  fontSize: 16,
                  color: "#707070",
                  paddingBottom: 5,
                  fontWeight: "bold",
                }}
              >
                {value.img_title}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#707070",
                  paddingBottom: 5,
                  fontWeight: "bold",
                }}
              >
                {value.img_bio}
              </Text>
              <View style={BuyStyle.imgPrice}>
                <Text style={{ color: "#707070", fontWeight: "bold" }}>
                  Image Stock:{" "}
                </Text>
                {value.img_stock == "" ? (
                  <Text style={{ color: "#8CCDC1", fontWeight: "bold" }}>
                    Unlimit
                  </Text>
                ) : (
                  <Text style={{ color: "#8CCDC1", fontWeight: "bold" }}>
                    {value.img_stock}
                  </Text>
                )}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  paddingRight: 10,
                }}
              >
                <Text
                  style={{ fontSize: 16, color: "#8CCDC1", fontWeight: "bold" }}
                >
                  {value.img_price} ฿
                </Text>
              </View>
              <View style={BuyStyle.buttonSpace}>
                <CustomButton
                  title="BACK"
                  onPress={() => this.props.navigation.goBack()}
                />
                {this.state.checkUser == false ? (
                  <CustomButton title="BUY" onPress={() => this.onBuypic()} />
                ) :
                  <CustomButton title="Edit Post"/>
                }
              </View>
              <View style={{ flex: 1 }}>
                <BuyModal
                  isModalVisible={this.state.isModalVisible}
                  changeModalVisibility={(bool) => {
                    this.changeModalVisibility(bool);
                  }}
                  img_id={this.state.img_id}
                  img_title={this.state.img_title}
                  img_owner={this.state.img_owner}
                  img_src={this.state.img_src}
                  img_price={this.state.img_price}
                  img_stock={this.state.img_stock}
                  goTimeline={() => this.props.navigation.navigate("Timeline")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
