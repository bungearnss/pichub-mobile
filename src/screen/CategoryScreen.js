import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { CategoryStyle } from "../styles/CategoryStyle";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "../component/CustomButton";
import * as Animatable from "react-native-animatable";
import { httpClient } from "../../core/HttpClient";

const numColumns = 2;

export default class CategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
      dataList: [],
    };
  }

  async componentDidMount() {
    await httpClient
      .get("/categories")
      .then((response) => {
        const result = response.data;
        console.log(`result :${result}`);

        if (result != null) {
          this.setState({
            dataList: result,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    //add isSelected in each item to detect the user's choice
    let arr = this.state.dataList.map((item, index) => {
      item.isSelected = false;
      return { ...item };
    });
    this.setState({ dataList: arr });
    // console.log(`arr data: ${arr}`);
  }

  // selectionHandler is a function that detected which category the user has selected
  // and the selected style will change according to the isSelected state
  // by selecting which category, it will be classified by using the index of each item in dataList
  selectionHandler = (ind) => {
    const { dataList } = this.state;
    let arr2 = dataList.map((item, index) => {
      if (ind == index) {
        item.isSelected = !item.isSelected;
      }
      return { ...item };
    });
    this.setState({ dataList: arr2 });
  };

  onSelected = () => {
    const { dataList } = this.state;
    //check data selected
    //prepare information sent at the back of the hourse
    let listSelected = dataList.filter((item) => item.isSelected == true);
    console.log(`listSelected: ${listSelected}`);

    let contentAlert = [];
    listSelected.forEach((item) => {
      contentAlert = contentAlert + item.cate_id + "," + "\n";
    });
    // Alert.alert(contentAlert);
  };

  //render item data from api, but now i use mocking data instead
  //data is sotred as an object array format then i render this to frontend
  _renderItem = ({ item, index }) => {
    if (item.empty) {
      return (
        <View style={[CategoryStyle.itemInvisible, CategoryStyle.itemStyle]} />
      );
    }
    return (
      <TouchableOpacity onPress={() => this.selectionHandler(index)}>
        <View style={{ padding: 5, flex: 1 }}>
          {item.isSelected ? (
            <Animatable.View
              style={CategoryStyle.ImageBoxSelect}
              animation="pulse"
            >
              <StatusBar hidden />
              <Image
                style={CategoryStyle.imgsize}
                source={{ uri: item.cate_img }}
              />
              <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                colors={["rgba(0,0,0,0.9)", "transparent"]}
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: 1,
                  borderRadius: 10,
                }}
              >
                <View style={CategoryStyle.imgView}>
                  <Text style={CategoryStyle.imgTitle}>{item.cate_title}</Text>
                </View>
              </LinearGradient>
            </Animatable.View>
          ) : (
            <View style={CategoryStyle.ImageBox}>
              <StatusBar hidden />
              <Image
                style={CategoryStyle.imgsize}
                source={{ uri: item.cate_img }}
              />
              <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                colors={["rgba(0,0,0,0.9)", "transparent"]}
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: 1,
                  borderRadius: 10,
                }}
              >
                <View style={CategoryStyle.imgView}>
                  <Text style={CategoryStyle.imgTitle}>{item.cate_title}</Text>
                </View>
              </LinearGradient>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={CategoryStyle.containers}>
        <View style={CategoryStyle.subcontainer}>
          <View style={CategoryStyle.headertitle}>
            <AntDesign
              name="star"
              size={20}
              color="#000"
              style={{ paddingLeft: 17 }}
            />
            <Text style={CategoryStyle.headerText}>Favorite Category</Text>
          </View>

          <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
            <FlatList
              data={this.state.dataList}
              renderItem={this._renderItem}
              keyExtractor={(item, index) => index.toString()}
              numColumns={numColumns}
            />
            <View style={CategoryStyle.buttonspace}>
              <CustomButton
                title="PREVIOUS"
                onPress={() => this.props.navigation.goBack()}
              />
              <CustomButton
                title="NEXT"
                onPress={() => [
                  this.props.navigation.navigate("Topics"),
                  this.onSelected(),
                ]}
              />
              {/* test onSelected function */}
              {/* <CustomButton title="NEXT" onPress={() => this.onSelected()}/> */}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
