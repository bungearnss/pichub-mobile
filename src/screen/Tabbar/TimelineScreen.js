import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  Animated,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import PictureModal from "../../component/PictureModal";
import { TimelineStyle } from "../../styles/TimelineStyle";
import { httpClient } from "../../../core/HttpClient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IMAGE } from '../../constants/Image';

const numColumns = 2;

/* create tab */
const tabs = ["FOR YOU", "TRENDING"];

export default class TimelineScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totaldata: [],
      active: "FOR YOU",
      DataList: [],
      isModalVisible: false,
      img_id: null,
      img_title: null,
      img_owner: "",
      img_src: "",
      profile_pic: "",
      img_bio: "",
      img_cate: "",
      img_price: "",
      img_stock: "",
    };
  }

  /* Set the initial value of the DataList state to 'FOR YOU'
     to set the default value of _renderItem function  
  */
  async componentDidMount() {
    let user_id = await AsyncStorage.getItem('userId');
    console.log(`user id: ${user_id}`);
    await httpClient
      .get(`/timeline/${user_id}`)
      .then((response) => {
        const result = response.data;
        // console.log(`result: ${result}`);
        if (result != null) {
          this.setState({
            totaldata: result,
          });
        }
        this.setState({
        DataList: [...this.state.totaldata.filter((item) => item.tag === "FOR YOU")],
      });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setStatusFilter = (tab) => {
    if (tab !== "") {
      this.setState({
        DataList: [...this.state.totaldata.filter((item) => item.tag === tab)],
      });
    } else {
      this.setState({
        DataList: [...this.state.totaldata],
      });
    }
    this.setState({
      active: tab,
    });
  };

  /* 
  Open Modal and sent data to PictureModal component
  */
  onPressModal(
    img_id,
    img_title,
    img_owner,
    img_src,
    profile_pic,
    img_bio,
    img_cate,
    img_price,
    img_stock
  ) {
    this.setState({
      isModalVisible: true,
      img_id: img_id,
      img_title: img_title,
      img_owner: img_owner,
      img_src: img_src,
      profile_pic: profile_pic,
      img_bio: img_bio,
      img_cate: img_cate,
      img_price: img_price,
      img_stock: img_stock,
    });
  }

  /* onPress function to navigation.navigate next screen */
  onPressNext() {
    this.props.navigation.navigate("Buy");
  }

  changeModalVisibility = (bool) => {
    this.setState({ isModalVisible: bool });
  };

  /* render top tab bar  */
  _renderTabs(tab, index) {
    const { active } = this.state;
    const isActive = active === tab;

    return (
      <View style={TimelineStyle.tabContainer} key={index}>
        <TouchableOpacity
          onPress={() => this.setStatusFilter(tab)}
          style={
            isActive
              ? [
                  TimelineStyle.active,
                  active == "FOR YOU"
                    ? { borderTopRightRadius: 25 }
                    : { borderTopLeftRadius: 25 },
                ]
              : null
          }
        >
          <Text
            style={[
              TimelineStyle.tabtext,
              isActive ? TimelineStyle.tabtextActive : null,
            ]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  formatData = (dataList, numColumns) => {
    const totalRows = Math.floor(dataList.length / numColumns);
    let totalLastRow = dataList.length - totalRows * numColumns;

    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      dataList.push({ key: "blank", empty: true });
      totalLastRow++;
    }
    return dataList;
  };

  /* render Image in FOR YOU tab and TRENDINNG tab */
  _renderItem = ({ item, index }) => {
    if (item.empty) {
      return (
        <View style={[TimelineStyle.itemInvisible, TimelineStyle.itemStyle]} />
      );
    }
    return (
      <Animated.View style={{ padding: 5, paddingVertical: 8 }} key={index}>
        {/* 
            **PLESE ATTENTION**
              The onPress function takes less time to press than the onLonePress function
              When user press it just once, the system will navigation.navigate to the TransactionScreen,
              but if user press onLongPress, the system will open modal to show the picture and basics details.
              When the user click on the picture in the modal, the system will take the user to the TransactionScreen as well
          */}
        <TouchableOpacity
          img_id={item.img_id}
          img_title={item.img_title}
          img_owner={item.img_owner}
          img_src={item.img_src}
          profile_pic={item.profile_pic}
          img_bio={item.img_bio}
          img_cate={item.img_cate}
          img_price={item.img_price}
          img_stock={item.img_stock}
          onPress={() => this.props.navigation.navigate("Buy", { value: item })}
          onLongPress={() =>
            this.onPressModal(
              item.img_id,
              item.img_title,
              item.img_owner,
              item.img_src,
              item.profile_pic,
              item.img_bio,
              item.img_cate,
              item.img_price,
              item.img_stock
            )
          }
        >
          <Animated.View style={TimelineStyle.ImageBox}>
            <StatusBar hidden />
            <Image
              style={[TimelineStyle.ImageSize]}
              source={{ uri: item.img_src }}
            />
          </Animated.View>
          <Animated.View style={TimelineStyle.ImageView}>
            <Text style={TimelineStyle.ImageTitle}>{item.img_title}</Text>
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  render() {
    const {
      img_id,
      img_title,
      img_owner,
      img_src,
      profile_pic,
      img_bio,
      img_cate,
      img_price,
      img_stock,
      isModalVisible,
      DataList,
    } = this.state;
    return (
      <Animated.View style={[TimelineStyle.container]}>
        <StatusBar hidden />
        <Animated.View style={TimelineStyle.tabbox}>
          {tabs.map((tab, index) => this._renderTabs(tab, index))}
        </Animated.View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, paddingVertical: 20 }}
        >
          <View style={TimelineStyle.ModalView}>
            <PictureModal
              isModalVisible={this.state.isModalVisible}
              changeModalVisibility={(bool) => {
                this.changeModalVisibility(bool);
              }}
              img_id={img_id}
              img_title={img_title}
              img_owner={img_owner}
              img_src={img_src}
              profile_pic={profile_pic}
              img_bio={img_bio}
              img_cate={img_cate}
              img_price={img_price}
              img_stock={img_stock}
            />
          </View>
          <SafeAreaView style={{ flex: 1 }}>
            <FlatList
              data={this.formatData(DataList, numColumns)}
              renderItem={this._renderItem}
              keyExtractor={(item, index) => item.toString()}
              numColumns={numColumns}
            />
          </SafeAreaView>
          <Animated.View style={{ paddingTop: 40 }} />
        </ScrollView>
      </Animated.View>
    );
  }
}
