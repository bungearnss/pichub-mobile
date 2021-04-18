import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  ImageBackground,
} from "react-native";
import { Avatar } from "react-native-paper";
import { IMAGE } from "../constants/Image";

const { width, height } = Dimensions.get("window");

export default class PictureModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      img_id: null,
      img_title: "",
      img_owner: "",
      img_src: "",
      profile_pic: "",
      img_bio: "",
      img_cate: "",
      img_price: "",
      img_stock: "",
    };
  }

  async componentDidMount(){
  }

  /* Received props from Timeline Screen to display in modal */
  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      isModalVisible: nextProps.isModalVisible,
      img_id: nextProps.img_id,
      img_title: nextProps.img_title,
      img_owner: nextProps.img_owner,
      img_src: nextProps.img_src,
      profile_pic: nextProps.profile_pic,
      img_bio: nextProps.img_bio,
      img_cate: nextProps.img_cate,
      img_price: nextProps.img_price,
      img_stock: nextProps.img_stock,
    });
  }

  closeModal = () => {
    this.props.changeModalVisibility(false);
  };

  changeModalVisibility = (bool) => {
    this.setState({ isModalVisible: bool });
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
    } = this.state;
    return (
      <Modal
        visible={this.state.isModalVisible}
        onRequestClose={() => {
          this.props.changeModalVisibility(false);
        }}
        animationType="fade"
        transparent={true}
      >
        <TouchableOpacity style={{ flex: 1 }} onPress={() => this.closeModal()}>
          <View style={styles.container}>
            <ImageBackground
              source={{ uri: img_src }}
              style={styles.backgroundBlur}
              blurRadius={7}
              resizeMode="cover"
            >
              <TouchableOpacity
                onPress={() => this.closeModal()} //bug
                style={styles.Mainbox}
              >
                <View style={styles.profileView}>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    {profile_pic ? (
                      <Avatar.Image size={32} source={{ uri: profile_pic }} />
                    ) : (
                      <Avatar.Image size={32} source={IMAGE.PROFILE_DEFAULT} />
                    )}
                    <Text style={[styles.profileText, { alignSelf: "center" }]}>
                      {img_owner}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "flex-end",
                    }}
                  >
                    <Text style={[styles.profileText, { color: "#8CCDC1" }]}>
                      {img_price} ฿
                    </Text>
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <Image
                    source={{ uri: img_src }}
                    resizeMode="cover"
                    style={styles.ImageCustom}
                  />
                </View>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  Mainbox: {
    backgroundColor: "#FFF",
    flex: 0.72,
    width: width * 0.85,
    borderRadius: 20,
    margin: 30,
  },
  profileView: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  profileText: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  ImageCustom: {
    width: "100%",
    height: "100%",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  backgroundBlur: {
    width,
    height,
    justifyContent: "center",
  },
});
