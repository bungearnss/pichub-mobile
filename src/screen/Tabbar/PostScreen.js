import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
  ScrollView,
  FlatList,
  SafeAreaView,
  Alert
} from "react-native";
//import axios from 'axios';
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import {
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";
import { CheckBox } from "native-base";
const _ = require("lodash");  

import { PostStyle } from "../../styles/PostStyle";
import { IMAGE } from "../../constants/Image";
import CustomButton from "../../component/CustomButton";
import { httpClient } from "../../../core/HttpClient";

const numColumns = 1;

//const CatagoryData = require('./CatagoryData.json')

export default class PostScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img_title: "",
      img_src: "",
      img_width: "",
      img_height: "",
      img_uri: "",
      img_bio: "",
      topicList: [],
      cateList: [],
      allCate: [],
      img_price: "",
      img_stock: "",

      isLimited: false,
      isUnlimited: false,
      cate_selected: []
    };
  }

  //Image Select Function
  async componentDidMount() {
    this.getPermissionAsync();

    await httpClient.get("/categories").then((response) => {
      const cateResult = response.data;

      this.setState({
        cateList: cateResult,
      });
    });
    await httpClient
      .get("/topics")
      .then((response) => {
        const topicResult = response.data;

        if (topicResult != null) {
          this.setState({
            topicList: topicResult,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({
      allCate: [...this.state.cateList, ...this.state.topicList],
    });

    let arr = this.state.allCate.map((item, index) => {
      item.isSelected = false;
      return { ...item };
    });
    this.setState({ allCate: arr });
    // console.log(`arr data: ${arr}`);
  }

  _selectionCate = (ind) => {
    const { allCate } = this.state;
    let arr2 = allCate.map((item, index) => {
      if (ind == index) {
        item.isSelected = !item.isSelected;
      }
      return { ...item };
    });
    this.setState({ allCate: arr2 });
  };

  onFinish = () => {
    const { allCate } = this.state;

    let cateListSelected = allCate.filter((item) => item.isSelected == true);
    // console.log(cateListSelected)

    for (let i = 0; i < cateListSelected.length; i++){
      const result = cateListSelected.slice(0, i+1).map(({cate_id}) => cate_id);
      // console.log(result)

      this.setState({
        cate_selected: result
      })
    }
  };

  getPermissionAsync = async () => {
    // Camera roll Permission
    if (Platform.OS === "ios") {
      const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
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

    console.log(result);

    if (!result.cancelled) {
      this.setState({
        img_src: result,
        img_width: result.width,
        img_height: result.height,
        img_uri: result.uri,
      });
    }
  };

  _renderCate = ({ item, index }) => {
    if (item.empty) {
      return (
        <View style={[CategoryStyle.itemInvisible, CategoryStyle.itemStyle]} />
      );
    }
    return (
      <View key={item.cate_id} style={{ padding: 5 }}>
        <View style={{ flexDirection: "row"}}>
          <CheckBox
            checked={item.isSelected}
            style={[
              PostStyle.checkBoxStock,
              {
                backgroundColor: item.isSelected ? "#8CCDC1" : null,
              },
            ]}
            onPress={() => this._selectionCate(index)}
          />
          <Text>{item.cate_title}</Text>
        </View>
      </View>
    );
  };

  handlePictureName = (text) => {
    this.setState({ img_title: text });
  };

  handleDescription = (text) => {
    this.setState({ img_bio: text });
  };

  handlePrice = (text) => {
    this.setState({ img_price: text });
  };

  handleStock = (text) => {
    this.setState({ img_stock: text });
  };

  _isLimitedCheck() {
    this.setState({ isLimited: !this.state.isLimited });
  }

  _isUnlimitedCheck() {
    this.setState({ isUnlimited: !this.state.isUnlimited });
  }

  render() {
    return (
      <View style={PostStyle.containers}>
        <View style={PostStyle.finishContainer}>
          <View style={{ paddingVertical: 15 }}>
            <CustomButton onPress={this.onFinish} title="Finish" />
          </View>
          <ScrollView
            style={{ backgroundColor: "#F8F8F8", flex: 1 }}
            showsVerticalScrollIndicator={false}
          >
            <View style={PostStyle.postContainer}>
              <View style={PostStyle.uploadContainer}>
                <Text style={{ fontSize: 20 }}>UPLOAD</Text>
                <View style={PostStyle.uploadTextInput}>
                  {this.state.img_src == "" ? (
                    <Text
                      style={{
                        color: "#CACACA",
                        alignSelf: "center",
                        paddingLeft: 15,
                      }}
                    >
                      Upload Browser
                    </Text>
                  ) : (
                    <ScrollView
                      style={{ flex: 1 }}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                    >
                      <Text
                        style={{
                          color: "#8CCDC1",
                          alignSelf: "center",
                          paddingLeft: 15,
                          paddingRight: 15,
                        }}
                      >
                        {this.state.img_uri}
                      </Text>
                    </ScrollView>
                  )}
                </View>
                <TouchableOpacity>
                  <MaterialCommunityIcons
                    name="folder-upload"
                    size={36}
                    color="#353535"
                  />
                </TouchableOpacity>
              </View>
              <View style={{ alignSelf: "center" }}>
                <TouchableOpacity onPress={this.pickImage}>
                  {this.state.img_src ? (
                    <Image
                      source={{ uri: this.state.img_src.uri }}
                      style={PostStyle.addImg}
                    />
                  ) : (
                    <Image source={IMAGE.ADDIMAGE} style={PostStyle.addImg} />
                  )}
                </TouchableOpacity>
                {this.state.img_src == "" ? (
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#6B9089",
                      textAlign: "center",
                    }}
                  >
                    Size:
                  </Text>
                ) : (
                  <View style={PostStyle.imgView}>
                    <Text style={PostStyle.imgText}>
                      Size: {this.state.img_width}px
                    </Text>
                    <Entypo name="cross" size={15} color="#6B9089" />
                    <Text style={PostStyle.imgText}>
                      {this.state.img_height}px
                    </Text>
                  </View>
                )}
              </View>
              <View style={PostStyle.detailPostContainer}>
                <View style={PostStyle.CustomInput}>
                  <TextInput
                    value={this.state.img_title}
                    onChangeText={this.handlePictureName}
                    style={{ width: "100%", paddingLeft: 15, color: "#6B9089" }}
                    placeholder="Picture Name"
                  />
                </View>
                <View
                  style={[
                    PostStyle.CustomInput,
                    { height: 90, borderRadius: 15 },
                  ]}
                >
                  <TextInput
                    multiline
                    numberOfLines={4}
                    onChangeText={this.handleDescription}
                    value={this.state.img_bio}
                    placeholder="Description"
                    style={{ width: "100%", paddingLeft: 15, color: "#6B9089" }}
                  />
                </View>
                <View style={PostStyle.CustomInput}>
                  <TextInput
                    value={this.state.img_price}
                    onChangeText={this.handlePrice}
                    keyboardType="numeric"
                    placeholder="Price"
                    style={{ width: "100%", paddingLeft: 15, color: "#6B9089" }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      paddingVertical: 10,
                      paddingTop: 15,
                      fontWeight: "bold",
                    }}
                  >
                    CATAGORY
                  </Text>
                  <View style={PostStyle.cateView}>
                    <ScrollView
                      showsVerticalScrollIndicator={false}
                      nestedScrollEnabled={true}
                    >
                      <SafeAreaView style={{ flex: 1 }}>
                        <FlatList
                          data={this.state.allCate}
                          renderItem={this._renderCate}
                          keyExtractor={(item, index) => index.toString()}
                          numColumns={numColumns}
                        />
                      </SafeAreaView>
                    </ScrollView>
                  </View>
                  <View
                    style={{
                      justifyContent: "flex-start",
                      paddingTop: 20,
                    }}
                  >
                    <Text style={{ fontWeight: "bold" }}>
                      IMAGE STOCK OPTIONS
                    </Text>
                    <View style={{ paddingVertical: 10 }}>
                      <View style={{ flexDirection: "row" }}>
                        <CheckBox
                          checked={this.state.isUnlimited}
                          style={[
                            PostStyle.checkBoxStock,
                            {
                              backgroundColor: this.state.isUnlimited
                                ? "#8CCDC1"
                                : null,
                            },
                          ]}
                          onPress={() => this._isUnlimitedCheck()}
                        />
                        <Text>Unlimited Stock</Text>
                      </View>
                      <View style={{ flexDirection: "row", paddingTop: 10 }}>
                        <CheckBox
                          checked={this.state.isLimited}
                          style={[
                            PostStyle.checkBoxStock,
                            {
                              backgroundColor: this.state.isLimited
                                ? "#8CCDC1"
                                : null,
                            },
                          ]}
                          onPress={() => this._isLimitedCheck()}
                        />
                        <Text>limited Stock</Text>
                      </View>
                      {this.state.isLimited ? (
                        <View
                          style={[
                            PostStyle.CustomInput,
                            {
                              width: 140,
                              height: 35,
                              marginLeft: 7,
                              marginTop: 10,
                            },
                          ]}
                        >
                          <TextInput
                            keyboardType="numeric"
                            onChangeText={this.handleStock}
                            placeholder="Number of stock"
                            style={{
                              width: "100%",
                              paddingLeft: 15,
                              color: "#6B9089",
                            }}
                          />
                        </View>
                      ) : null}
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
