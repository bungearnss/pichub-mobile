import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  SafeAreaView
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { SearchcateStyle } from "../../styles/SearchcateStyle";
import { httpClient } from "../../../core/HttpClient";

const numColumns = 2;

export default class SearchcateScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cateList: [],
      topicList: [],
      text: '',
    };
  }

  async componentDidMount() {
    await httpClient
      .get("/categories")
      .then((response) => {
        const cate = response.data;
        // console.log(`cate data: ${cate}`);

        if (cate != null) {
          this.setState({
            cateList: cate,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    await httpClient
      .get("/topics")
      .then((response) => {
        const topics = response.data;
        // console.log(`topics data: ${topics}`);

        if (topics != null) {
          this.setState({
            topicList: topics,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  _renderCate = ({ item, index }) => {
    if (item.empty) {
      return (
        <View
          style={[SearchcateStyle.itemInvisible, SearchcateStyle.itemStyle]}
        />
      );
    }
    return (
      <TouchableOpacity>
        <View style={{ padding: 7, flex: 1 }} key={index}>
          <StatusBar hidden />
          <View style={SearchcateStyle.box}>
            <Image
              style={SearchcateStyle.imgSize}
              source={{ uri: item.cate_img }}
            />
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0.8 }}
              colors={["rgba(0,0,0,1)", "transparent"]}
              style={{
                width: "100%",
                height: "100%",
                opacity: 1,
                borderRadius: 10,
              }}
            >
              <View style={SearchcateStyle.boxView}>
                <Text style={SearchcateStyle.boxTitle}>{item.cate_title}</Text>
              </View>
            </LinearGradient>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  _renderTopic = ({ item, index }) => {
    if (item.empty) {
      return (
        <View
          style={[SearchcateStyle.itemInvisible, SearchcateStyle.itemStyle]}
        />
      );
    }
    return (
      <TouchableOpacity>
        <View style={{ padding: 7, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <StatusBar hidden />
          <View style={SearchcateStyle.box}>
            <Image
              style={SearchcateStyle.imgSize}
              source={{ uri: item.cate_img }}
            />
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0.8, y: 0.8 }}
              colors={["rgba(0,0,0,1)", "transparent"]}
              style={{
                width: "100%",
                height: "100%",
                opacity: 1,
                borderRadius: 10,
              }}
            >
              <View style={SearchcateStyle.boxView}>
                <Text style={SearchcateStyle.boxTitle}>{item.cate_title}</Text>
              </View>
            </LinearGradient>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  filterItem = text => {
      this.setState({text}, () => {
          if ('' == text){
              this.setState({
                  cateList: this.state.cateList,
                  topicList: this.state.topicList
              });
              return;
          }
          this.state.cateList = this.state.cateList.filter(function(item){
              return item.cate_title.includes(text);
          }).map(function({cate_id, cate_title, cate_img}){
              return {cate_id, cate_title, cate_img};
          })

          this.state.topicList = this.state.topicList.filter(function(item){
              return item.cate_title.includes(text);
          }).map(function({cate_id, cate_title, cate_img}){
              return {cate_id, cate_title, cate_img};
          })
      })
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F8F8F8",
          marginBottom: 10
        }}
      >
        <ScrollView style={{ flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={SearchcateStyle.searchView}>
            <View style={{ flexDirection: "row" , alignItems: 'center'}}>
              <FontAwesome name="search" size={32} color="#195F51" />
              <View style={SearchcateStyle.searchBox}>
                <TextInput
                  placeholder="SEARCH"
                  placeholderTextColor="#89A7A1"
                  style={[SearchcateStyle.searchText]}
                  onChangeText={(text) => this.filterItem(text)}
                  value={this.state.text}
                />
              </View>
            </View>
          </View>
          <SafeAreaView style={{flex: 1}}>
          <FlatList
            data={this.state.cateList}
            renderItem={this._renderCate}
            keyExtractor={(item, index) => index.toString()}
            numColumns={numColumns}
          />
          <FlatList
            data={this.state.topicList}
            renderItem={this._renderTopic}
            keyExtractor={(item, index) => index.toString()}
            numColumns={numColumns}
          />
          </SafeAreaView>
        </ScrollView>
      </View>
    );
  }
}
